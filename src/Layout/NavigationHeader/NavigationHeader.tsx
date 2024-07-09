import { FC, SyntheticEvent, useRef, useState } from 'react'
import styles from './NavigationHeader.module.css'
import { NavigationLogo } from './GrimoireLogo'
import { NavigationButton } from './NavigationButton'
import { CloseIcon } from '../../assets/CloseIcon'
import { AddIcon } from '../../assets/AddIcon'

export const NavigationHeader: FC<Props> = () => {
  const ref: React.Ref<HTMLDialogElement> = useRef(null)

  const onAddClicked = (event: SyntheticEvent) => {
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
            <NavigationButton title='ALL' />
            <NavigationButton title='PODCASTS' />
            <NavigationButton title='BOOKS' />
            <NavigationButton title='ARTICLES' />
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

      <dialog ref={ref} onClose={onClose} className={styles.dialog}>
        <button onClick={onClose} className={styles.closeButton}>
          <CloseIcon />
        </button>
        <form>
          <label>title</label>
          <input />
        </form>
      </dialog>
    </>
  )
}
