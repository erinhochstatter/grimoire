import React, { FC } from 'react'
import styles from './NavigationButton.module.css'

interface Props {
  title: string
}

export const NavigationButton: FC<Props> = ({ title }) => {
  return (
    <li className={styles.item}>
      <button className={styles.filterButton}>{title}</button>
    </li>
  )
}
