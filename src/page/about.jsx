import React from "react"
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px'
  },
  buttonStyles: {
    color: 'green',
    border: 0
  }
})

export default function () {
  const classes = useStyles()

  return (
    <div>
      <Typography color='primary' variant='h1' className={classes.helloThereStyle}>Hello</Typography>
      <Button color='secondary' variant='outlined' className={classes.buttonStyles}>Button</Button>
    </div>
  )
}
