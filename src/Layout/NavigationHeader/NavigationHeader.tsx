import { FC } from 'react'
import styles from './NavigationHeader.module.css'
import { NavigationLogo } from './NavigationLogo'

export const NavigationHeader: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.links}>
          <li>ALL</li>
          <li>PODCASTS</li>
          <li>BOOKS</li>
          <li>ARTICLES</li>
          <li>
            <button className={styles.addNew}>+</button>
          </li>
        </ul>
      </div>
      <div className={styles.subtitle}>Shared resources for friends</div>
      <NavigationLogo fill='#46795a' className={styles.logo} />
    </div>
  )
}
