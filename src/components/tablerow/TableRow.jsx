import React from 'react'
import { Button } from 'react-bootstrap'

const TableRow = (props) => {
    return (
        <tr key={props.item.id}>
            <td>{props.item.id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.price}$</td>
            <td>{props.item.category}</td>
            <td><Button variant="danger">Töröl</Button></td>
        </tr>
    )
}

export default TableRow