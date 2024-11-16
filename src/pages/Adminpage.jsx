import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { ApiContext } from '../context/ApiContext'

function Adminpage() {
  const {getAdat} = useContext(ApiContext)
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
        <getAdat className="map"></getAdat>
      </tbody>
    </Table>
    </div>
  )
}

export default Adminpage