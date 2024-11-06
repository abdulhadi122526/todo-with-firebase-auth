import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from '../pages/login'
import SignUp from '../pages/singup'
import Todo from '../pages/todo'
import LayOut from '../pages/LayOut'
const router =  createBrowserRouter([
  {
    path: '/',
    element: <LayOut/>,
    children:[
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
