import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home/Home'
import { Outlet, Route, } from "react-router";
import AuthRoutes from "./Routes/AuthRoutes"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <div>
        <AuthRoutes />
      </div>
    </>
  )
}

export default App
