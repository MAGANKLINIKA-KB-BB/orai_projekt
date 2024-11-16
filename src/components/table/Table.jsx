import React from 'react'
import { ApiContext } from '../../context/ApiContext'
import TableRow from '../tablerow/TableRow'

const Table = () => {
    const { tLista } = useContext(ApiContext)
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
                        <th>kategória</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tLista.length > 0 ? (tLista.map((item, i) => (
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

export default Table