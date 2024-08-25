import { QueryClient } from '@tanstack/react-query'
import { LoaderFunction } from 'react-router-dom'

type Filter = 'books' | 'articles' | 'podcasts'
const { VITE_API_BASE_URL } = import.meta.env

export const postsQuery = (filter?: string) => ({
  queryKey: ['posts', filter],
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
