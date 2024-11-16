import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { ApiContext } from '../context/ApiContext'

function Adminpage() {
  const {tLista} = useContext(ApiContext)
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
          tLista.length > 0 ? (tLista.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
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

export default Adminpage