import { FC } from 'react'
import { PostRow } from './Rows/PostRow'
import { useLoaderData, useLocation } from 'react-router-dom'
import styles from './HomePage.module.css'

export const HomePage: FC = ({}) => {
  const location = useLocation()
  console.log({ location })
  // const { data, isPending, isError } = useQuery<PostsResponse>(postsQuery())
  const data: any = useLoaderData()

  // if (isPending) {
  //   return <div>...</div>
  // }

  // if (isError) {
  //   return <div>We were unable to summon your grimoire</div>
  // }

  return (
    <div className={styles.container}>
      {data && data.posts.map((post: any, index: number) => <PostRow post={post} key={index} />)}
    </div>
  )
}
