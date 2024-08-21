import {  QueryClient } from '@tanstack/react-query'
import { LoaderFunction } from 'react-router-dom'

type PostParam = 'books' | 'articles' | 'podcasts'
const { VITE_API_BASE_URL } = import.meta.env

export const postsQuery = (queryParam?: PostParam) => ({
  queryKey: ['posts', queryParam],
  queryFn: async () => getPosts(queryParam),
})
const getPosts = async (queryParam: PostParam |undefined) => {
  const path = queryParam ? `${VITE_API_BASE_URL}/posts?filter=${queryParam}` : `${VITE_API_BASE_URL}/posts`
  const res = await fetch(path, {
    method: 'GET',
    // credentials: 'omit',
  })
  const json = await res.json()

  return json
}

export const postsLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({  request }) => {
    const url = new URL(request.url);
    const filter = url.searchParams.get("filter");
    console.log({filter})

    const query = postsQuery(filter as any)
    // ⬇️ return data or fetch it
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    )
  }