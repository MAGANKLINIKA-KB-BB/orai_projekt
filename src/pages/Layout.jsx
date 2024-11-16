import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Főoldal</Link></li>
                    <li><Link to={"/kosar"}>Kosár</Link></li>
                    <li><Link to={"/admin"}>Admin</Link></li>
                </ul>
            </nav>
            <article>
                <Outlet />
            </article>
        </>
    )
}

export default Layout