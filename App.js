import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

import LandingPage from './js/components/landing-page.js'
import Login from './js/components/login.js'
import Register from './js/components/register.js'
import Dashboard from './js/components/dashboard.js'
import Create from './js/components/create.js'
import Edit from './js/components/edit.js'
import AddMarker from './js/components/add-marker.js'
import ArScene from './js/components/ar-scene.js'

const LANDING_PAGE = "LANDING_PAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const DASHBOARD = "DASHBOARD";
const CREATE = "CREATE";
const EDIT = "EDIT";
const ADD_MARKER = "ADD_MARKER"
const AR_SCENE = "AR_SCENE"

export default function ViroSample() {

  const [mode, setMode] = useState(LANDING_PAGE)
  const [history, setHistory] = useState([LANDING_PAGE]);
  const [currentProps, setCurrentProps] = useState({})

  props = {}

  const transition = (nextMode, back = false, props) => {
    if (back) {
      let prevHistory = history.slice(0, -1);
      setHistory(prevHistory)
      setMode(prevHistory[prevHistory.length - 1]);
    } else {
      setMode(nextMode);
      setHistory([...history, nextMode]);
    }
  } 

  return (
    <>
      {mode === LANDING_PAGE && (<LandingPage transition = {transition} localStyles = {localStyles} />)}
      {mode === LOGIN && (<Login transition = {transition} />)}
      {mode === REGISTER && (<Register transition = {transition} localStyles = {localStyles} />)}
      {mode === DASHBOARD && (<Dashboard transition = {transition} localStyles = {localStyles} />)}
      {mode === CREATE && (<Create transition = {transition} localStyles = {localStyles} />)}
      {mode === EDIT && (<Edit transition = {transition} localStyles = {localStyles} />)}
      {mode === ADD_MARKER && (<AddMarker transition = {transition} localStyles = {localStyles} />)}
      {mode === AR_SCENE && (<ArScene transition = {transition} localStyles = {localStyles} />)}
    </>
  )

}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  headerText: {
    paddingTop: 60,
    fontSize: 33,
    textAlign:'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

