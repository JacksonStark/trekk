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
  Dimensions
 } from 'react-native';

export default function CreateEdit({refreshDashboard, currentUser, currentTrekk, currentMarkers, goToAddMarker}) {
  console.log('CURRENT TREKK (create-edit.js)', currentTrekk);
  let markers = []
  if (currentMarkers){
  markers = currentMarkers.map((marker) => {
    console.log('IN CREATE-EDIT:', marker.spawned_description)
    return (
      <View>
        <Text style={localStyles.text}>
          Marker Image:
        </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: marker.marker_image}}
        />
        <Text>
          {marker.spawned_description && (
          <Text style={localStyles.text}>{"\n"}Displays text.{"\n"}</Text>
          )}

          {marker.spawned_image && (
            <Text style={localStyles.text}>Displays an image.{"\n"}</Text>
          )}

          {marker.spawned_video && ( 
            <Text style={localStyles.text}>Displays a video.{"\n"}</Text>
          )}
        </Text>
      </View>
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
    marginTop: 20,
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
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
    // backgroundColor:'#68a0ff',
    textAlign:'center',
    fontSize : 22,
    // fontWeight: 'bold',
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
    // marginBottom: 10,
    backgroundColor:'#01B0FF',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
  },
})