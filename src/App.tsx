import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { postsLoader } from './Routes/posts'
import './App.css'
import { HomePage } from './Pages/Home/HomePage'
import { NavigationHeader } from './Layout/NavigationHeader/NavigationHeader'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavigationHeader />
        <HomePage />
      </>
    ),
    loader: postsLoader(queryClient),
  },
  {
    path: '/posts',
    element: (
      <>
        <NavigationHeader />
        <HomePage />
      </>
    ),
    loader: postsLoader(queryClient),
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
