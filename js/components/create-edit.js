import React, { useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SwipeableListView,
} from 'react-native';

import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';


export default function CreateEdit({refreshDashboard, currentTrekk, currentMarkers, goToAddMarker, deleteMarker}) {
  // console.log('CURRENT TREKK (create-edit.js)', currentTrekk);
  let markers = []
  if (currentMarkers) {
  markers = currentMarkers.map((marker) => {
    // console.log('IN CREATE-EDIT:', marker.spawned_description)
    return (
      <SwipeableViews>

        <View style={localStyles.swipe_items}>
          <Image
            style={[localStyles.image, {marginLeft: 80, borderColor: "black", borderWidth: 1.5}]}
            source={{uri: marker.marker_image}}
          />
          {marker.spawned_description !== "" && (
            <Image style={localStyles.image} source={require('../res/desc-icon.png')}/>
          )}

          {marker.spawned_image !== "" && (
            <Image style={localStyles.image} source={require('../res/photo-icon.png')}/>
          )}

          {marker.spawned_video !== "" && ( 
            <Image style={localStyles.image} source={require('../res/video-icon.png')}/>
          )}
        </View>

        <View style={{flex: 1, alignItems: "center"}}>
          <Text style={[localStyles.text, {backgroundColor: "rgb(231,76,60)"}]} onPress={() => deleteMarker(marker.id)}>Delete</Text>
        </View>

      </SwipeableViews>
    )
  })
  }

  return (
    <View style={localStyles.outer}>

      <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} />

      <ScrollView contentContainerStyle={localStyles.inner}>

        <Text style={localStyles.titleText}>
          Edit {currentTrekk.name} Trekk
        </Text>

        <Text style={localStyles.text}>
          Current Markers:
        </Text>

        {markers}

        <TouchableOpacity 
        onPress={() => goToAddMarker()}
        style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Add Marker</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => refreshDashboard()}
        style = {localStyles.buttons}
        >
          <Text style = {localStyles.buttonText}>Save</Text>
        </TouchableOpacity>

    </ScrollView>
  </View>
  );
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "white",
  },
  inner: {
    flexGrow : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "transparent",
  },
  // swipe: {
  //   flex : 1,
  //   flexDirection: 'column',
  //   alignItems:'center',
  //   backgroundColor: "transparent",
  // },
  swipe_items: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: "transparent",
  },
  background: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    // marginTop: 20,
    marginBottom: 33,
    color: "black",
    fontSize: 30,
    fontStyle: "italic",
    backgroundColor: "red",
    borderRadius: 20,
    borderWidth: 4,
    padding: 5,
    overflow: "hidden"
  },
  image: {
    width: 50, 
    height: 50,
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10
  },
  titleText: {
    color: "cyan",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 80,
    marginBottom: 80,
    marginTop: 80,
    alignItems: 'center'
  },
  buttonText: {
    textAlign:'center',
    fontSize : 22,
    fontStyle: "italic",
    paddingTop: 5,
    borderColor: "black",
  },
  buttons : {
    height: 60,
    width: 120,
    paddingTop:10,
    paddingBottom:5,
    marginTop: 30,
    backgroundColor:'#01B0FF',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
  },
})