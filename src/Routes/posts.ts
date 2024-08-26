import { QueryClient, queryOptions } from '@tanstack/react-query'
import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom'
import { Post } from '../types'

type Filter = 'books' | 'articles' | 'podcasts'
const { VITE_API_BASE_URL } = import.meta.env

// -- Post: Index --
export const postsQuery = (filter?: string) => ({
  queryKey: ['posts', 'list', filter],
  queryFn: async () => getPosts(filter),
})

const getPosts = async (filter: string | undefined) => {
  const path = filter ? `${VITE_API_BASE_URL}/posts?filter=${filter}` : `${VITE_API_BASE_URL}/posts`
  const res = await fetch(path, {
    method: 'GET',
  })
  const json = await res.json()

  return json
}

export const postsLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }) => {
    const url = new URL(request.url)
    const filter = url.searchParams.get('filter')

    const query = postsQuery(filter as Filter)
    // ⬇️ return data or fetch it
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
  }

// -- Post: New --
export const createPost = async (formData: Post) => {
  const res = await fetch(`${VITE_API_BASE_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await res.json()
  return json
}

// -- Post: Show --
export const postDetailsQuery = (id: string) =>
  queryOptions({
    queryKey: ['posts', 'detail', id],
    queryFn: async () => {
      const post = await getPost(id)
      if (!post) {
        throw new Response('', {
          status: 404,
          statusText: 'Not Found',
        })
      }
      return post
    },
  })

const getPost = async (postId: string): Promise<Post> => {
  const path = `${VITE_API_BASE_URL}/posts/${postId}`
  const res = await fetch(path, {
    method: 'GET',
  })
  const json = await res.json()

  return json
}

export const postDetailsLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.postId) {
      throw new Error('No post ID provided')
    }
    await queryClient.ensureQueryData(postDetailsQuery(params.postId))
    return { postId: params.postId }
  }

// export const action =
//   (queryClient: QueryClient) =>
//   async ({ request, params }: ActionFunctionArgs) => {
//     let formData = await request.formData()
//     if (!params.postId) {
//       throw new Error('No contact ID provided')
//     }
//     await updateContact(params.postId, {
//       favorite: formData.get('favorite') === 'true',
//     })
//     await queryClient.invalidateQueries({ queryKey: ['contacts'] })
//     return null
//   }
