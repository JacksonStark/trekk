import React, { useState, useEffect } from 'react';
import {
  StyleSheet, SwipeableListView,
} from 'react-native';
import axios from 'axios';

import LandingPage from './js/components/landing-page.js'
import Login from './js/components/login.js'
import Register from './js/components/register.js'
import Dashboard from './js/components/dashboard.js'
import CreateEdit from './js/components/create-edit.js'
// import Edit from './js/components/edit.js'
import AddMarker from './js/components/add-marker.js'
import ArScene from './js/components/ar-scene.js'

const LANDING_PAGE = "LANDING_PAGE";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const DASHBOARD = "DASHBOARD";
const CREATE_EDIT = "CREATE_EDIT";
// const EDIT = "EDIT";
const ADD_MARKER = "ADD_MARKER"
const AR_SCENE = "AR_SCENE"

export default function ViroSample() {

  const [mode, setMode] = useState(LANDING_PAGE);
  const [history, setHistory] = useState([LANDING_PAGE]);

  // REDUCER STATES
  const [currentUser, setCurrentUser] = useState("");
  const [userTrekks, setUserTrekks] = useState([]);
  const [currentTrekk, setCurrentTrekk] = useState("");
  const [currentMarkers, setCurrentMarkers] = useState("");


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

  // console.log('IN (app.js): ', currentUser)

  
  useEffect(() => {

    if (currentUser && !currentTrekk) {
      axios.get(`http://trekk.herokuapp.com/trekks/${currentUser}`)
      .then((res) => {
        // console.log('IN CURRENTUSER USE-EFFECT: ', res.data)
        setUserTrekks(res.data.trekks)
        transition('DASHBOARD')
      })
    }

    if (currentTrekk && currentUser) {
      axios.get(`http://trekk.herokuapp.com/markers/${currentTrekk}`)
      .then((res) => {
        // console.log('IN CURRENT-TREKK USE-EFFECT: ', res.data)
        setCurrentMarkers(res.data.markers)
        transition('CREATE_EDIT')
      })
    }

    // if (currentMarkers && currentUser && currentMarkers) {
    //   axios.get(`http://trekk.herokuapp.com/markers/${currentTrekk}`)
    //   .then((res) => {
    //     console.log('IN CURRENT-POINTS USE-EFFECT: ', res.data)
    //     setCurrentMarkers(res.data.markers)
    //   })
    // }

    // if (currentPoint) {
    //   axios.get(`http://trekk.herokuapp.com/trekks/${currentUser}`)
    //   .then((res) => {
    //     console.log(res.data)
    //     setCurrentPoint(res.data.trekks)
    //   })
    // }

  }, [currentUser, currentTrekk])

  const switchUser = (id) => {
    setCurrentUser(id)
    // transition('DASHBOARD')
  }

  const switchTrekk = (id) => {
    // requestedTrekk = userTrekks[id]
    setCurrentTrekk(id)
  }

  const goToAddMarker = () => {
    transition("ADD_MARKER")
  }

  const addMarker = (marker_image, spawned_description, spawned_image, spawned_video, trekk_id) => {
    axios.post(`http://trekk.herokuapp.com/markers/create?marker_image=${marker_image}&spawned_description=${spawned_description}&spawned_image=${spawned_image}&spawned_video=${spawned_video}&trekk_id=${trekk_id}`)
    .then((res) => {
      let returnedMarker = res.data.marker
      // setCurrentMarkers((prev) => ({...prev, returnedMarker}))
      setCurrentMarkers([...currentMarkers, returnedMarker])
      // console.log('RETURNED MARKER: ', currentMarkers)
      res.data.bool ? transition('CREATE_EDIT', true) : null
    })
  }


  return (
    <>
      {mode === LANDING_PAGE && (<LandingPage transition = {transition} localStyles = {localStyles} />)}
      {mode === LOGIN && (<Login transition = {transition} switchUser= {switchUser} />)}
      {mode === REGISTER && (<Register transition = {transition} localStyles = {localStyles} />)}
      {mode === DASHBOARD && (<Dashboard switchTrekk = {switchTrekk} transition = {transition} localStyles = {localStyles} userTrekks = {userTrekks} />)}
      {mode === CREATE_EDIT && (<CreateEdit goToAddMarker= {goToAddMarker} currentMarkers = {currentMarkers} transition = {transition} localStyles = {localStyles} currentUser = {currentUser} currentTrekk = {currentTrekk} />)}
      {/* {mode === EDIT && (<Edit transition = {transition} localStyles = {localStyles} />)} */}
      {mode === ADD_MARKER && (<AddMarker addMarker = {addMarker} transition = {transition} currentTrekk = {currentTrekk} localStyles = {localStyles} />)}
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

