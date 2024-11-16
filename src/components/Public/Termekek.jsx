import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import Termek from './Termek';

function Termekek() {
    const {tLista} = useContext(ApiContext);
  return (
    <div>
        {tLista.map((item, i) => {
            return <Termek item = {item}/>
        })}
    </div>
  )
}

export default Termekek