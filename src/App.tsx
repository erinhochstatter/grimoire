import { useState, version } from 'react'
import './App.css'
import { HomePage } from './Pages/Home/HomePage'
import { NavigationHeader } from './Layout/NavigationHeader/NavigationHeader'

function App() {
  return (
    <div>
      <NavigationHeader />
      <HomePage initialTab='books' />
    </div>
  )
}

export default App
