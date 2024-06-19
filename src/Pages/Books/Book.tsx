import React, { FC } from 'react'
import styles from './Book.module.css'
import bookImage from '../../assets/book1.jpeg'

interface Book {
  title: string
  author: string
  coverImagePath: string
}

interface Props {
  book: Book
}

export const BookCard: React.FC<Props> = ({ book }: Props) => {
  return (
    <div className={styles.container}>
      <img src={bookImage} className={styles.image} />
      <div className={styles.textContainer}>
        <p className={styles.title}>{book.title}</p>
        <p className={styles.author}>{book.author}</p>
      </div>
    </div>
  )
}
