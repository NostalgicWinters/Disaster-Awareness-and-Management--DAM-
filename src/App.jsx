import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import About from './components/About'
import Polls from './components/polls'
import Addpoll from './components/Addpoll'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/registration",
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
      path: "/Addpolls",
      element: <Addpoll />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
