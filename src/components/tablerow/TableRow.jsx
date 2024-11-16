import React from 'react'

const TableRow = (props) => {
    return (
        <tr key={props.item.id}>
            <td>{props.item.id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.price}</td>
            <td>{props.item.category}</td>
        </tr>
    )
}

export default TableRow