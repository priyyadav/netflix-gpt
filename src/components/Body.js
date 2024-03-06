import React, { useEffect } from 'react'
import Login from './Login'
import { Browse } from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
export const Body = () => {
    const dispatch=useDispatch()

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
