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
  TouchableOpacity
 } from 'react-native';

export default function AddMarker({transition, addMarker, currentTrekk}) {

  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [markerImage, setMarkerImage] = useState('')

  return (
    <ImageBackground style={localStyles.outer}>
      <View style={localStyles.inner}>

          <Text>
            Create New Marker
          </Text>

          <Text>
            Marker Image:
          </Text>

          <TextInput
            placeholder = "Marker Image"
            onChangeText= {(n) => {setMarkerImage(n)}}
            style={localStyles.text}
          />

          <Text>
            Text To Display:
          </Text>
          
          <TextInput
            placeholder = "Name of Trekk"
            onChangeText= {(n) => {setText(n)}}
            style={localStyles.text}
          />

          <Text>
            Image To Display:
          </Text>

          <TextInput
            placeholder = "Image to be Displayed"
            onChangeText= {(n) => {setImage(n)}}
            style={localStyles.text}
          />

          <Text>
            Video To Display:
          </Text>

          <TextInput
            placeholder = "Video to be Displayed"
            onChangeText= {(n) => {setVideo(n)}}
            style={localStyles.text}
          />

          <TouchableOpacity 
          onPress={() => addMarker(markerImage, text, image, video, currentTrekk)}
          style = {localStyles.buttons}
          >
            <Text style = {localStyles.buttonText}>Add Marker</Text>
          </TouchableOpacity>

    </View>
  </ImageBackground>
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
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
  },
  text: {
    color:"black"
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