import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Todo from '../pages/Todo'
import LayOut from '../pages/LayOut'
const router =  createBrowserRouter([
  {
    path: '/',
    element: <LayOut/>,
    children:[
      {
        path: '/',
        element: <Login/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'singup',
        element: <SignUp/>,
      },
      {
        path: 'todo',
        element: <Todo/>,
      },
      

    ]
  },
  
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
