import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { Table } from 'react-bootstrap'
import KosarRow from '../tablerow/KosarRow'

const KosarTable = () => {
    const { cartObj } = useContext(ApiContext)
    console.log(cartObj)
    return (
        <div>
            <h1>
                Felhasználó:{cartObj.userId} Létrehozás: {cartObj.date}
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>termék kód</th>
                        <th>darab</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartObj.products ?
                            cartObj.products.map((item, i) => {
                                return <KosarRow key={i} item={item} />
                            }) :
                            "Nincs adat"
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default KosarTable