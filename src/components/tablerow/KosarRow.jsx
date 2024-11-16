import React from 'react'

const KosarRow = (props) => {
  return (
    <tr key={props.item.id}>
        <td>{props.item.id}</td>
            <td>{props.item.userId}</td>
            <td>{props.item.date}</td>
        </tr>
  )
}

export default KosarRow