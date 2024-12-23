import { useEffect } from "react"
import { Outlet } from "react-router-dom"
export function Root() {
    useEffect(() => { }, [])
    return (
        <>
            <div>

                <Outlet />
            </div>
        </>
    )
}