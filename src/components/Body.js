import React from 'react'
import Login from './Login'
import { Browse } from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
export const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
