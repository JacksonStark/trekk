import React, { useState, useEffect, useReducer } from 'react';
import {
  StyleSheet, SwipeableListView,
} from 'react-native';
import axios from 'axios';

import reducer, {
  SET_USER,
  SET_USER_TREKKS,
  SET_TREKK,
  SET_MARKERS
} from './js/reducer/app-reducer.js'

import LandingPage from './js/components/landing-page.js'
import Login from './js/components/login.js'
import Register from './js/components/register.js'
import Dashboard from './js/components/dashboard.js'
import CreateEdit from './js/components/create-edit.js'
import AddMarker from './js/components/add-marker.js'
import ArScene from './js/components/ar-scene.js'


const LANDING_PAGE = "LANDING_PAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const DASHBOARD = "DASHBOARD";
const CREATE_EDIT = "CREATE_EDIT";
const ADD_MARKER = "ADD_MARKER"
const AR_SCENE = "AR_SCENE"

export default function ViroSample() {

  const [mode, setMode] = useState(LANDING_PAGE);
  const [history, setHistory] = useState([LANDING_PAGE]);

  const [state, dispatch] = useReducer(reducer, {
    currentUser: "",
    userTrekks: [],
    currentTrekk: "",
    currentMarkers: ""
  })


  const transition = (nextMode, back = false) => {
    if (back) {
      let prevHistory = history.slice(0, -1);
      setHistory(prevHistory)
      setMode(prevHistory[prevHistory.length - 1]);
    } else {
      setMode(nextMode);
      setHistory([...history, nextMode]);
    }
  } 

  
  useEffect(() => {

    if (state.currentUser && !state.currentTrekk.id) {
      axios.get(`http://trekk.herokuapp.com/trekks/${state.currentUser}`)
      .then((res) => {
        dispatch({type:SET_USER_TREKKS, value: res.data.trekks})
        transition('DASHBOARD')
      })
    }

    // if (state.currentTrekk.id && state.currentUser) {
    //   axios.get(`http://trekk.herokuapp.com/markers/${state.currentTrekk.id}`)
    //   .then((res) => {
    //     dispatch({type:SET_MARKERS, value: res.data.markers})
    //     transition('CREATE_EDIT')
    //   })
    // }
  }, [state.currentUser])

  const switchUser = (id) => {
    dispatch({type:SET_USER, value: id})
  }

  const switchTrekk = (trekk, destination) => {
    axios.get(`http://trekk.herokuapp.com/markers/${trekk.id}`)
    .then((res) => {
      dispatch({type: SET_TREKK, value: trekk})
      dispatch({type: SET_MARKERS, value: res.data.markers})
      transition(destination);
    })
  }

  const goToAddMarker = () => {
    transition("ADD_MARKER")
  }

  const addMarker = (marker_image, spawned_description, spawned_image, spawned_video, trekk_id) => {
    axios.post(`http://trekk.herokuapp.com/markers/create?marker_image=${marker_image}&spawned_description=${spawned_description}&spawned_image=${spawned_image}&spawned_video=${spawned_video}&trekk_id=${trekk_id}`)
    .then((res) => {
      dispatch({type: SET_MARKERS, value: res.data.markers})
      res.data.bool ? transition('CREATE_EDIT', true) : null
    })
  }

  const addTrekk = (name) => {
    axios.post(`http://trekk.herokuapp.com/trekks/create?user_id=${state.currentUser}&name=${name}`)
      .then((res) => {
        data = {
          id: res.data.trekk_id,
          name: res.data.name
        }
        dispatch({type: SET_TREKK, value: data})
        transition('CREATE_EDIT')
    })
  }
  console.log('CURRENT TREKK ID: ', state.currentTrekk)

  const refreshDashboard = () => {
    dispatch({type: SET_TREKK, value: ""})
    dispatch({type: SET_MARKERS, value: ""})
    axios.get(`http://trekk.herokuapp.com/trekks/${state.currentUser}`)
    .then((res) => {
      dispatch({type:SET_USER_TREKKS, value: res.data.trekks})
      transition('DASHBOARD')
    })
  }


  const deleteTrekk = (id) => {
    axios.delete(`http://trekk.herokuapp.com/trekks?trekk_id=${id}&user_id=${state.currentUser}`)
    .then((res) => {
      dispatch({type: 'SET_USER_TREKKS', value: res.data.trekks})
      transition('DASHBOARD')
    })
  }

  const logout = () => {
    dispatch({type: 'SET_USER', value: ''})
    dispatch({type: 'SET_USER_TREKKS', value: []})
    dispatch({type: 'SET_TREKK', value: ''})
    dispatch({type: 'SET_MARKERS', value: ''})
    transition('LANDING_PAGE')
  }

  const guestArScene = (accessCode) => {
    axios.get(`http://trekk.herokuapp.com/trekks/guest/${accessCode}`)
    .then((res) => {
      dispatch({type: 'SET_MARKERS', value: res.data.markers})
      transition('AR_SCENE')
    })
  }

  return (
    <>
      {mode === LANDING_PAGE && (<LandingPage transition = {transition} localStyles = {localStyles} guestArScene = {guestArScene} />)}
      {mode === LOGIN && (<Login transition = {transition} switchUser= {switchUser} />)}
      {mode === REGISTER && (<Register transition = {transition} switchUser = {switchUser} localStyles = {localStyles} />)}
      {mode === DASHBOARD && (<Dashboard logout = {logout} addTrekk = {addTrekk} switchTrekk = {switchTrekk} deleteTrekk = {deleteTrekk} localStyles = {localStyles} userTrekks = {state.userTrekks} />)}
      {mode === CREATE_EDIT && (<CreateEdit goToAddMarker= {goToAddMarker} currentMarkers = {state.currentMarkers} refreshDashboard = {refreshDashboard} localStyles = {localStyles} currentUser = {state.currentUser} currentTrekk = {state.currentTrekk} />)}
      {/* {mode === EDIT && (<Edit transition = {transition} localStyles = {localStyles} />)} */}
      {mode === ADD_MARKER && (<AddMarker addMarker = {addMarker} transition = {transition} currentTrekk = {state.currentTrekk.id} localStyles = {localStyles} />)}
      {mode === AR_SCENE && (<ArScene transition = {transition} localStyles = {localStyles} userMarkers = {state.currentMarkers} currentUser = {state.currentUser} />)}
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

