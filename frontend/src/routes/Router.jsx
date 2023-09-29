
import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"

import {Routes, Route} from "react-router-dom"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Doctors" element={<Doctors/>} />
      <Route path="/Doctor/:id" element={<DoctorDetails/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
    
    </Routes>
  )
}

export default Router
