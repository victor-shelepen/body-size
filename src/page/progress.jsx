import React, { useMemo, useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Checkbox, Grid } from '@material-ui/core'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns'
import dataF, { getTypes } from '../logic/data'

export default function () {
  const types = useMemo(() => getTypes(), [measurements])
  const [selected, setSelected] = useState([types[1]])
  const measurements = useMemo(() => dataF())
  const dateFormatter = date => {
    return format(new Date(date), "dd/MMM");
  };

  const handleToggle = (type) => () => {
    const index = selected.indexOf(type)
    if (index > -1) {
      selected.splice(index, 1)
    } else {
      selected.push(type)
    }

    setSelected([...selected])
  }

  return (
    <div>
      <h2>Progress</h2>
      <div style={{ width: '100%', height: '300px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <div style={{height: 300}}>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Accordion>
              <AccordionSummary>Measurements</AccordionSummary>
              <AccordionDetails>
                <List>
                  {types.map(type => (
                    <ListItem key={type} onClick={handleToggle(type)}>
                      <ListItemIcon>
                        <Checkbox checked={selected.indexOf(type) > -1} />
                      </ListItemIcon>
                      <ListItemText >{type}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
