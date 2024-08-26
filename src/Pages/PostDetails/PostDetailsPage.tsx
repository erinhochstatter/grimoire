import { FC } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useLoaderData, loader } from 'react-router-dom'
import { postDetailsQuery } from '../../Routes/posts'
import styles from './PostDetailsPage.module.css'

export const PostDetailsPage: FC = ({}) => {
  const { postId } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>

  const { data, isPending, isError } = useSuspenseQuery(postDetailsQuery(postId))

  if (isPending) {
    return <div>...</div>
  }

  if (isError) {
    return <div>We were unable to summon your grimoire</div>
  }

  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
