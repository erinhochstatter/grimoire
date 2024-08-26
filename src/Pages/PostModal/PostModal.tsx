import { FC } from 'react'
import { Form, redirect, ActionFunctionArgs } from 'react-router-dom'
import { createPost } from '../../Routes/posts'
import { QueryClient } from '@tanstack/react-query'
import { CloseIcon } from '../../assets/CloseIcon'
import styles from './PostModal.module.css'

interface Props {
  onClose: () => void
}

export const action =
  (queryClient: QueryClient) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const post = await createPost(data as any)
    queryClient.invalidateQueries({ queryKey: ['posts', 'list'] })

    return redirect(`/posts/${post.id}`)
  }

export const PostModal: FC<Props> = ({ onClose }) => {
  return (
    <div>
      <button onClick={onClose} className={styles.closeButton}>
        <CloseIcon />
      </button>
      <div className={styles.uploader}>upload here</div>
      <Form method='post'>
        <div className={styles.textFields}>
          <div className={styles.formField}>
            <label>TITLE</label>
            <input type='text' name='title' />
            {/* {userNameError ? <i>{userNameError}</i> : null} */}
          </div>
          <div className={styles.formField}>
            <label>AUTHOR | CREATOR | ARTIST </label>
            <input type='text' name='author' />
            {/* {passwordError ? <i>{passwordError}</i> : null} */}
          </div>
          <div className={styles.formField}>
            <label>Published at</label>
            <input type='text' name='date_published' />
          </div>
        </div>
        <button disabled={false} type='submit'>
          Add stuff
        </button>
        {/* {createPost.isPending ? <p>casting a new spell</p> : null} */}
      </Form>
    </div>
  )
}
