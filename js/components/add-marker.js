import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableHighlight, 
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
 } from 'react-native';

export default function AddMarker({transition, addMarker, currentTrekk}) {

  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [markerImage, setMarkerImage] = useState('')

  console.log("In add-markr", currentTrekk)

  return (
    <View style={localStyles.outer}>

      <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} />

      <ScrollView contentContainerStyle={localStyles.inner}>

          <Text style={localStyles.titleText}>
            Add New Marker
          </Text>

          <TextInput
            placeholder = "Enter Marker Image URL:"
            placeholderTextColor = "white"
            onChangeText= {(n) => {setMarkerImage(n)}}
            style={localStyles.text}
          />

          
          <TextInput
            placeholder = "Enter Spawned Description:"
            placeholderTextColor = "white"
            onChangeText= {(n) => {setDescription(n)}}
            style={localStyles.text}
          />


          <TextInput
            placeholder = "Enter Spawned Image URL:"
            placeholderTextColor = "white"
            onChangeText= {(n) => {setImage(n)}}
            style={localStyles.text}
          />

          <TextInput
            placeholder = "Enter Spawned Video URL:"
            placeholderTextColor = "white"
            onChangeText= {(n) => {setVideo(n)}}
            style={localStyles.text}
          />

          <TouchableOpacity 
          onPress={() => addMarker(markerImage, description, image, video, currentTrekk)}
          style={localStyles.buttons}
          >
            <Text style = {localStyles.buttonText}>Add Marker</Text>
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
    marginTop: 48,
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
  titleText: {
    color: "cyan",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 80,
    marginBottom: 30,
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
    marginTop: 50,
    // marginBottom: 10,
    backgroundColor:'#01B0FF',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
  },
})