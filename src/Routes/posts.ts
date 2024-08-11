import { QueryClient } from '@tanstack/react-query'

const { VITE_API_BASE_URL } = import.meta.env

export const postsQuery = () => ({
  queryKey: ['posts'],
  queryFn: async () => getPosts(),
})
const getPosts = async () => {
  const res = await fetch(`${VITE_API_BASE_URL}/posts`, {
    method: 'GET',
    credentials: 'omit',
  })
  const json = await res.json()

  return json
}

export const postsLoader =
  (queryClient: QueryClient) =>
  async ({}) => {
    const query = postsQuery()
    // ⬇️ return data or fetch it
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
  }
