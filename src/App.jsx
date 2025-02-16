import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/registration",
      element: <Registration />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
