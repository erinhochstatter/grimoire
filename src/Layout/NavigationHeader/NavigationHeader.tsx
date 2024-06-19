import { FC } from 'react'
import styles from './NavigationHeader.module.css'

export const NavigationHeader: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li>ALL</li>
        <li>PODCASTS</li>
        <li>BOOKS</li>
        <li>ARTICLES</li>
        <li>
          <button className={styles.addNew}>+</button>
        </li>
      </ul>
      <div className={styles.subtitle}>Shared resources for friends</div>
      <div className={styles.title}>LittleGrimoire</div>
    </div>
  )
}
