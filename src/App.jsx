import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import Contactinfo from './components/Contactinfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JodsLayout from './layout/JodsLayout'
import Jobs, { jobsLoader } from './Pages/Jobs'
import JobDetails, { JobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout />} >
        <Route path='info' element={<Contactinfo/>}/>
        <Route path='form' element={<ContactForm/>}/>
      </Route>

      <Route path='jobs' element={<JodsLayout/>} errorElement={<Error/>}>
        <Route index element={<Jobs/>} loader={jobsLoader}/>
        <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader} />
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

  return (
   <RouterProvider router={router}/>
  )
}

export default App
