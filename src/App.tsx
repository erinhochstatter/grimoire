import { useState, version } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { HomePage } from './Pages/Home/HomePage'
import { NavigationHeader } from './Layout/NavigationHeader/NavigationHeader'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavigationHeader />
        <HomePage selectedTab='books' />
      </div>
    </QueryClientProvider>
  )
}

export default App
