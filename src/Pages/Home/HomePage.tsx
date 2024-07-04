import { FC, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PostRow } from './Rows/PostRow'
import styles from './HomePage.module.css'

interface Friend {
  first_name: string
  last_name: string
  avatar_url: string
}

interface Post {
  title: string
  author: string
  kind: 'book' | 'podcast' | 'article'
  datePublished: Date
  coverImagePath: string
  friend: Friend
}

type PostsResponse = {
  posts: Post[]
}

const { VITE_API_BASE_URL } = import.meta.env

const getPosts = async () => {
  const res = await fetch(`${VITE_API_BASE_URL}/posts`, {
    method: 'GET',
    credentials: 'omit',
  })

  return await res.json()
}

export const HomePage: FC<Props> = () => {
  const { data, isPending, isError } = useQuery<PostsResponse>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  if (isPending) {
    return <div>...</div>
  }

  if (isError) {
    return <div>We were unable to summon your grimoire</div>
  }

  return (
    <div className={styles.container}>
      {data && data.posts.map((post, index) => <PostRow post={post} key={index} />)}
    </div>
  )
}
