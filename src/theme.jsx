import { createMuiTheme } from '@material-ui/core'
import { purple, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

export default theme