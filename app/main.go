package main

import (
	"database/sql"
	"fmt"
    "log"
	"net/http"

	_ "github.com/lib/pq"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer ws.Close()

	db, err := sql.Open("postgres", "postgres://user:password@localhost/dbname?sslmode=disable")
	if err != nil {
        fmt.Println(err)
        return
        }
        defer db.Close()
        go func() {
            for {
                var message string
                err := db.QueryRow("SELECT message FROM messages ORDER BY id DESC LIMIT 1").Scan(&message)
                if err != nil {
                    fmt.Println(err)
                    break
                }
        
                err = ws.WriteJSON(message)
                if err != nil {
                    fmt.Println("error:", err)
                    break
                }
            }
        }()
        
        for {
            var msg string
            err := ws.ReadJSON(&msg)
            if err != nil {
                fmt.Println("error:", err)
                break
            }
            fmt.Printf("received message: %s\n", msg)
        
            _, err = db.Exec("INSERT INTO messages (message) VALUES ($1)", msg)
            if err != nil {
                fmt.Println(err)
                break
            }
        }
    }

    func main() {
    http.HandleFunc("/ws", handleConnections)
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
    fmt.Println(err)
    }
    }        
