import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLoaderData, useLocation, LoaderFunction } from 'react-router-dom'
import { postsQuery } from '../../Routes/posts'
import { PostRow } from './Rows/PostRow'
import styles from './HomePage.module.css'

export const HomePage: FC = ({}) => {
  const initialData = useLoaderData() as Awaited<ReturnType<LoaderFunction>>
  const searchQuery = useLocation().search

  const { data, isPending, isError } = useQuery({
    ...postsQuery(searchQuery.split('=')[1]),
    initialData,
  })

  if (isPending) {
    return <div>...</div>
  }

  if (isError) {
    return <div>We were unable to summon your grimoire</div>
  }

  return (
    <div className={styles.container}>
      {data.posts &&
        data.posts?.map((post: any, index: number) => <PostRow post={post} key={index} />)}
    </div>
  )
}
