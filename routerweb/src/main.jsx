import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {RouterProvider,Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
