import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PostsResponse } from '../../types'
import { postsQuery } from '../../Routes/posts'
import { PostRow } from './Rows/PostRow'
import styles from './HomePage.module.css'

export const HomePage: FC = () => {
  const { data, isPending, isError } = useQuery<PostsResponse>(postsQuery())

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
