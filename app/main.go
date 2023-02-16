package main

import (
	"fmt"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "home")
    fmt.Println("Endpoint Hit: home")
}

func handleRequests() {
    http.HandleFunc("/", home)
    log.Fatal(http.ListenAndServe(":8000", nil))
}

func main() {
    fmt.Println("Server started")
    handleRequests()
}
