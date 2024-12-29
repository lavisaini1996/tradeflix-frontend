import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Screens/Home/Home'
import { Outlet, Route, } from "react-router";
import AuthRoutes from "./Routes/AuthRoutes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './Components/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AuthRoutes />
      <Footer />
    </>
  )
}

export default App
