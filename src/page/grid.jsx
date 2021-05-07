import React, { useMemo } from 'react'
import dataF, { getTypes } from '../logic/data'
import { DataGrid } from '@material-ui/data-grid'

export default function() {
  const measurements = useMemo(() => {
    const data = dataF()
    data.forEach(m => m.id = m.date)

    return data
  })
  const types = useMemo(() => getTypes() )
  const columns = useMemo(() => types
    .map(k => {return {
      field: k,
      headerName: k,
      type: 'number',
      width: 90,
    }}),
    [measurements, types])

  return (
    <div style={{height: '400px', width: '100%'}}>
      <DataGrid rows={measurements} columns={columns} pageSize={5} />
    </div>
  )
}