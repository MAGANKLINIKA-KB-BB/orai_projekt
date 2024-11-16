import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Nav activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/kosar">Kosár</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav.Item>
            </Nav>
            <article>
                <Outlet />
            </article>
        </>
    )
}

export default Layout