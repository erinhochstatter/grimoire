import React from 'react'
import { format } from 'date-fns'
import { Post } from '../../../types'
import styles from './PostRow.module.css'
import { OpenIcon } from '../../../assets/OpenIcon'

interface Props {
  post: Post
}

export const PostRow: React.FC<Props> = ({ post }: Props) => {
  // TODO: make the dot a square
  const dot = '\u2022'
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.titleText}>
          <p className={styles.text}>{format(post.datePublished, 'MM.dd.yy')}</p>
          <div className={styles.titleWithButton}>
            <p className={styles.text}>
              {post.author}: {post.title}
            </p>
            <button className={styles.button}>
              {/* TODO: fix the icon on hover */}
              <OpenIcon fill='#46795a' />
            </button>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.text}>
            {dot} {post.kind}
          </p>
          <p className={styles.text}>Comments</p>
        </div>
      </div>
      <img src={post.coverImagePath ?? 'https://picsum.photos/200/300'} className={styles.image} />
    </div>
  )
}
