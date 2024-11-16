import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import Termek from './Termek';
import './Termek.css';

function Termekek() {
    const {tLista} = useContext(ApiContext);
  return (  
    <div className='cards'>
        {tLista.map((item, i) => {
            return <Termek key={i} item = {item}/>
        })}
    </div>
  )
}

export default Termekek