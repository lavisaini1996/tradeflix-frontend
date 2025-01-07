import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Screens/Home/Home'
import { BrowserRouter, Outlet, Route, } from "react-router";
import AuthRoutes from "./Routes/AuthRoutes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <AuthRoutes />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
