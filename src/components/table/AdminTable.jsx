import React, { useContext, useState } from 'react'
import { ApiContext } from '../../context/ApiContext'
import TableRow from '../tablerow/TableRow'
import { Button, Table } from 'react-bootstrap'

const AdminTable = () => {
    const { aktLista, deleteAll } = useContext(ApiContext)


    return (
        <div>
            <h1>
                Készlet infó
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Termék név</th>
                        <th>Ár</th>
                        <th>Kategória</th>
                        <th>Mennyiség</th>
                        <th><Button onClick={() => deleteAll()} variant="danger">Töröl-Mind</Button></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                    {
                        aktLista.length > 0 ? (aktLista.map((item, i) => (
                            <TableRow key={i} item={item} />
                        ))) : (<tr>
                            <td colSpan="4" className="text-center">
                                Nincs elérhető adat.
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AdminTable