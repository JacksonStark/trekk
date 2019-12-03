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
  ScrollView,
  KeyboardAvoidingView,
 } from 'react-native';

export default function AddMarker({transition, addMarker, currentTrekk}) {

  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [markerImage, setMarkerImage] = useState('')

  const [error, setError] = useState(""); 

  const validate = () => {
    markerImage ? null : setError("Please enter a marker image.")
    markerImage ? addMarker(markerImage, description, image, video, currentTrekk) : null
  }

  return (
    <View style={localStyles.outer}>

      <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} />

      <KeyboardAvoidingView style={{flexDirection: 'row',
        alignItems:'center',}} behavior="padding" enabled>

      <ScrollView contentContainerStyle={localStyles.inner}>

          <Text style={localStyles.titleText}>
            Add New Marker
          </Text>

          <TextInput
            placeholder = "Enter Marker Image URL:"
            placeholderTextColor = "white"
            onChangeText= {(n) => {setMarkerImage(n)}}
            style={localStyles.text}
            onFocus={() => setError("")}
          />

          { error ? (
          <TouchableOpacity style={localStyles.errorBox}>
            <Text style={localStyles.errorText}>{error}</Text>
          </TouchableOpacity>)
          : null }

          
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
          <View style={localStyles.buttonsContainer}>

          <TouchableOpacity 
          onPress={() => transition("CREATE_EDIT", true)}
          style={localStyles.buttons}
          >
            <Text style = {localStyles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => validate()}
          style={localStyles.buttons}
          >
            <Text style = {localStyles.buttonText}>Add Marker</Text>
          </TouchableOpacity>

        </View>

    </ScrollView>
    </KeyboardAvoidingView>
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
    // height: 60,
    // width: 120,
    // paddingTop:10,
    // paddingBottom:5,
    padding: 8,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    // marginBottom: 10,
    backgroundColor:'#01B0FF',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  errorBox: {    
    position: "absolute",
    bottom: "2%",
    padding: 10,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    opacity: 0.8,
    borderRadius: 20
  },
  errorText: {    
    color: "black",
    fontStyle: "italic",
    fontSize: 16
  },
})