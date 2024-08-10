import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './FilterLink.module.css'

interface Props {
  title: string
}

export const FilterLink: FC<Props> = ({ title }) => {
  const queryParam = title === 'ALL' ? '/' : `/posts?filter=${title.toLowerCase()}`
  return (
    <li className={styles.item}>
      <NavLink className={styles.filterButton} to={queryParam}>
        {title}
      </NavLink>
    </li>
  )
}