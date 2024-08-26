import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { postsLoader, postDetailsLoader } from './Routes/posts'
import './App.css'
import { HomePage } from './Pages/Home/HomePage'
import { ErrorPage } from './Pages/Error/ErrorPage'
import { PostDetailsPage } from './Pages/PostDetails/PostDetailsPage'
import { action as newAction } from './Pages/PostModal/PostModal'
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
    action: newAction(queryClient),
    errorElement: <ErrorPage />,
  },
  {
    path: 'posts/:postId',
    element: <PostDetailsPage />,
    loader: postDetailsLoader(queryClient),
    // action: postAction(queryClient),
    errorElement: <ErrorPage />,
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

// {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader(queryClient),
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },

//       {

//       {
//         path: 'posts/:postId/edit',
//         element: <EditPost />,
//         loader: contactLoader(queryClient),
//         action: editAction(queryClient),
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: 'posts/:postId/destroy',
//         element: <EditPost />,
//         action: destroyAction(queryClient),
//         errorElement: <ErrorPage />,
//       },
//     ],
//   },
// ])
