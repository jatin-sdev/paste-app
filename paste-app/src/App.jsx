import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Paste from './components/Paste'
import Viewpaste from './components/Viewpaste'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home /></div>,
  },
  {
    path: '/pastes',
    element: <div>
      <Navbar />
      <Paste /></div>,
  },
  {
    path: '/pastes/:id',
    element: <div>
      <Navbar />
      <Viewpaste /></div>,
  },
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
