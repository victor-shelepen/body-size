import React, { useMemo, useState } from "react"
import { Box, Select } from '@material-ui/core'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {format} from 'date-fns'

import dataF, { getTypes } from '../logic/data'

export default function () {

  const types = useMemo(() => getTypes(), [measurements])
  const [selected, setSelected] = useState([types[0]], [types])
  const measurements = useMemo(() => dataF())

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelected(value);
  };

  const dateFormatter = date => {
    return format(new Date(date), "dd/MMM");
  };

  return (
    <div>
      <h2>Home</h2>
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
          <Box width={3 / 4} bgcolor="blue.300" height="400px">
            <ResponsiveContainer width='100%' height="100%">
              <LineChart data={measurements}>
                {selected.map(key => <Line key={key} type="monotone" dataKey={key} stroke="#8884d8" />)}
                <XAxis
                  dataKey="date"
                  tickFormatter={dateFormatter}
                  />
                <YAxis domain={['auto', 'auto']} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box width={1 / 4} bgcolor="grey.300">
            <Select
              multiple
              native
              value={selected}
              onChange={handleChangeMultiple}
              inputProps={{
                id: 'select-multiple-native',
              }}
            >
              {types.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
      </div>
    </div>
  )
}
