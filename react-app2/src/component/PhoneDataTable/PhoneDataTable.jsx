import * as React from "react";
import Table from "react-bootstrap/Table";
import { data } from "../../ContactInformationdata";
import './phoneDataTable.css'

export const DataTable = () => {
  return (
    <Table className="phoneDataTable" striped bordered hover>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>NUMBER</th>
          <th>CALL CONSENT</th>
          <th>SMS CONSENT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((phone1) => (
          <tr key={phone1.id}>
            <td>{phone1.type}</td>
            <td>{phone1.number}</td>
            <td>{phone1.call_consent}</td>
            <td>{phone1.sms_consent}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
