import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import MyAccount from '../Dashboard/user-account/MyAccount'
import{Routes,Route} from 'react-router-dom'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Book from '../pages/Book'
import HospitalsList from '../Components/Hospitals/HospitalList'

const Routers = () => {

  return ( 
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} /> 
    <Route path='/hospitals' element={<HospitalsList/>} />
    <Route path="/doctors" element={<Doctors/>} /> 
    <Route path="/doctors/:id" element={<DoctorDetails/>} /> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/register" element={<Signup/>} /> 
    <Route path="/contact" element={<Contact/>} />
    <Route path="/book" element={<Book/>} /> 
    <Route path="/services" element={<Services/>} />  
    <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={["patient"]}><MyAccount/></ProtectedRoute>} /> 
    <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={["doctor"]}><Dashboard/></ProtectedRoute>  } />
    
    </Routes>
  )
}

export default Routers;
