import { FC } from 'react'
import { BookCard, Book } from '../Books/BookCard'
import styles from './HomePage.module.css'

const madworld: Book = {
  title: 'Andrea Gibson on the Blessings Of the Wound',
  author: 'Micha Frazer-Carroll',
  coverImagePath: './assets/book1.jpeg',
  datePublished: new Date('July 5, 1900'),
  dateAdded: new Date(),
  type: 'Book',
}
export const HomePage: FC<Props> = () => {
  const books = new Array(6).fill(madworld)
  return (
    <div className={styles.container}>
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  )
}
