import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider >
  </HashRouter>,
  document.getElementById("root")
);