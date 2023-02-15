import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import { AccountSet } from '../../Accountdata'
import './currentAcData.css'

const CurrentAcDataTable = () => {
  return (
    <Table className='currentAccount' striped bordered hover size="sm">
<thead>
      <tr >
        <th>ACCOUNT NO</th>
        <th>RELATIONSHIP</th>
        <th>BALANCE</th>
        <th>ACE SET STATUS</th>
        <th>ACE AGE</th>
        <th>CLIENT NAME</th>
      </tr>
    </thead>
    <tbody>
      {
         AccountSet.map((Account) => (
          <tr key={Account.id}>
          <td>{Account.ano}</td>
          <td>{Account.relationship}</td>
          <td>{Account.balance}</td>
          <td>{Account.status}</td>
          <td>{Account.age}</td>
          <td>{Account.client}</td>
        </tr>
        ))
      }
    </tbody>
  </Table>
  )
}



export default CurrentAcDataTable;