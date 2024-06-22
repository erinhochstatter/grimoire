import React from 'react'
import { format } from 'date-fns'
import styles from './Book.module.css'
import bookImage from '../../assets/book1.jpeg'
import { ModalIcon } from '../../assets/ModalIcon'

export interface Book {
  title: string
  author: string
  coverImagePath: string
  type: string
  datePublished: Date
  dateAdded: Date
}

interface Props {
  book: Book
}

export const BookCard: React.FC<Props> = ({ book }: Props) => {
  // TODO: make the dot a square
  const dot = '\u2022'
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.titleText}>
          <p className={styles.text}>{format(book.datePublished, 'MM.dd.yy')}</p>
          <div className={styles.titleWithButton}>
            <p className={styles.text}>
              {book.author}: {book.title}
            </p>
            <button className={styles.button}>
              {/* TODO: fix the icon on hover */}
              <ModalIcon fill='#46795a' />
            </button>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.text}>{dot} Book</p>
          <p className={styles.text}>Comments</p>
        </div>
      </div>
      <img src={bookImage} className={styles.image} />
    </div>
  )
}
