import React from 'react'
import Table from 'react-bootstrap/Table';
import { data2 } from '../../ContactInformationdata';
import './addressDataTable2.css'

  const DataTable2 = () => {
  return (
    <Table className='addressDataTable' striped bordered hover size="s">
<thead>
      <tr >
        <th>TYPE</th>
        <th>NUMBER</th>
        <th>CALL CONSENT</th>
        <th>SMS CONSENT</th>
      </tr>
    </thead>
    <tbody>
      {
         data2.map((Address) => (
          <tr key={Address.id}>
          <td>{Address.type}</td>
          <td>{Address.number}</td>
          <td>{Address.call_consent}</td>
          <td>{Address.sms_consent}</td>
        </tr>
        ))
      }

    </tbody>
  </Table>
  )
}

export default DataTable2

