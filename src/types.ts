export interface Friend {
  first_name: string
  last_name: string
  avatar_url: string
}

export interface Post {
  title: string
  author: string
  kind: 'book' | 'podcast' | 'article'
  datePublished: Date
  coverImagePath: string
  friend: Friend
}

export type PostsResponse = {
  posts: Post[]
}
