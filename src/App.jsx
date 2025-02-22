import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import About from './components/About'
import Polls from './components/polls'
import Resources from './components/Resources'
import MapPage from './components/MapPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/registeration",
      element: <Registration />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/polls",
      element: <Polls />
    },
    {
      path: "/resources",
      element: <Resources />
    },
    {
      path: "/map",
      element: <MapPage />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
