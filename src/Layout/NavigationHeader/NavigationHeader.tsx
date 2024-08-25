import { FC, SyntheticEvent, useRef } from 'react'
import styles from './NavigationHeader.module.css'
import { NavigationLogo } from './GrimoireLogo'
import { FilterLink } from './FilterLink'
import { AddIcon } from '../../assets/AddIcon'
import { PostModal } from '../../Pages/PostModal/PostModal'

export const NavigationHeader: FC = () => {
  const ref: React.Ref<HTMLDialogElement> = useRef(null)

  const onAddClicked = (_event: SyntheticEvent) => {
    ref.current?.showModal()
  }

  const onClose = () => {
    ref.current?.close()
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <ul className={styles.links}>
            <FilterLink title='ALL' />
            <FilterLink title='PODCASTS' />
            <FilterLink title='BOOKS' />
            <FilterLink title='ARTICLES' />
            <li>
              <button className={styles.addNew} onClick={onAddClicked}>
                <AddIcon fill='white' />
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.subtitle}>Shared resources for friends</div>
        <NavigationLogo fill='#46795a' className={styles.logo} />
      </div>
      {/* dialog */}
      <dialog ref={ref} onClose={onClose}>
        <PostModal onClose={onClose} />
      </dialog>
    </>
  )
}
