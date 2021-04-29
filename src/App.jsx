import React, { Component } from "react"
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Switch from './switch'

import './App.css';
import Frame from './frame/component'


export default function () {
  return (
    <Router>
      <Frame />
    </Router>
  )
}
