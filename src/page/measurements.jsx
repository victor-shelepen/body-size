import React, { useMemo, useState, Fragment } from 'react'
import dataF from '../logic/data'
import { format } from 'date-fns'
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    flexGrow: 1
  }
})

const dateFormatter = date => {
  return format(new Date(date), "dd/MM/yy");
}

export default function () {
  const classes = useStyle()
  const [date, setDate] = useState(undefined)
  const [dayMeasurements, setDayMeasurements] = useState([], [allMeasurements, date])
  const allMeasurements = useMemo(() => dataF())
  const dates = useMemo(() => (
    allMeasurements.map(m => m.date)
  ), [allMeasurements])

  const dateClicked = (date) => () => {
    setDate(date)
    const measurements = allMeasurements.find(m => m.date == date)
    setDayMeasurements(measurements)
  }

  return (
    <div className={classes.root}>
      <h1>Measurements</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <List component="nav">
            {dates.map(d => (
              <ListItem button key={d} onClick={dateClicked(d)} selected={d == date}>
                <ListItemText primary={dateFormatter(d)} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            {Object.entries(dayMeasurements).map(([a, b]) => (
              <Fragment key={a}>
                <Grid item xs={6}>{a}</Grid>
                <Grid item xs={6}>{b}</Grid>
              </Fragment>
            )
          )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}