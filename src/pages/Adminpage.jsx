import React, { useContext } from 'react'
import AdminTable from '../components/table/AdminTable'
import Searchbar from '../components/searchInput/Searchbar'

function Adminpage() {
  return (
    <div>
      <Searchbar />
      <AdminTable />
    </div>
  )
}

export default Adminpage