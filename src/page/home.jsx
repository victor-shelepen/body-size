import React, { useMemo, useState } from "react"
import { Button, Box } from '@material-ui/core'
import data, { getMeasurementsByType, getTypes } from '../logic/data'

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const _data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

export default function () {

  const types = useMemo(() => getTypes(), [measurements])
  const [type, setType] = useState(types[0], [types])
  const measurements = useMemo(() => getMeasurementsByType(type), [type])

  return (
    <div>
      <h2>Home - {type}</h2>
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
          <Box width={3 / 4} bgcolor="grey.300">
            <ResponsiveContainer width={700} height="80%">
              <LineChart width={400} height={400} data={measurements}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box width={1 / 4} bgcolor="grey.300">
            {types.map((t) => <Button key={t} variant="contained" onClick={() => setType(t)}>{t}</Button>)}
          </Box>
        </Box>
      </div>
    </div>
  )
}
