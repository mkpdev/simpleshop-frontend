import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { requestRegions } from '../thunk/userProduct';

function Regions() {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.getRegions.region)

  useEffect(() => {
    dispatch(requestRegions())
    //react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <h1> Regions</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title(region name)</th>
            <th>Tax </th>
            <th>country</th>
            <th>currency</th>
          </tr>
        </thead>
        {region && region.map((item) => (
          <tbody>
            <tr>
              <td>{item.title}</td>
              <td>{item.tax}</td>
              <td>{item.country}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  )
}

export default Regions