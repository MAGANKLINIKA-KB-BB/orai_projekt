import React from 'react'

const KosarRow = (props) => {
    return (
        <tr key={props.item.id}>
            <td>{props.item.productId}</td>
            <td>{props.item.quantity}</td>
        </tr>
    )
}

export default KosarRow