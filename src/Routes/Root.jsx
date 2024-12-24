import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"
export function Root() {
    useEffect(() => { }, [])
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}