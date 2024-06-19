import { FC } from 'react'
import { BookCard } from '../Books/Book'
import styles from './HomePage.module.css'

interface Props {
  initialTab: 'books' | 'podcasts'
}

const madworld: Book = {
  title: 'Mad World: the politics of Mental health',
  author: 'Micha Frazer-Carroll',
  coverImagePath: './assets/book1.jpeg',
}
export const HomePage: FC<Props> = ({ greeting }: Props) => {
  return (
    <div className={styles.container}>
      {greeting}
      <BookCard book={madworld} />
    </div>
  )
}
