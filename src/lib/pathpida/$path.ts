export const pagesPath = {
  "chat": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/chat/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/chat' as const, hash: url?.hash })
  },
  "dashboard": {
    $url: (url?: { hash?: string }) => ({ pathname: '/dashboard' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
