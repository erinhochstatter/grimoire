import { ReactNode, forwardRef, ForwardedRef, useRef, useImperativeHandle } from 'react'
import styles from './Modal.module.css'

interface Props {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal = forwardRef(function Modal(
  { children, isOpen, onClose }: Props,
  _ref: ForwardedRef<HTMLDialogElement>,
) {
  const onCloseButtonClick = () => {
    onClose()
  }

  console.log('modal', { isOpen })

  return (
    <dialog open={isOpen} onClose={onClose} className={styles.container}>
      <button onClick={onCloseButtonClick}>bye</button>
      {children}
    </dialog>
  )
})
