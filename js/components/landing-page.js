import React, { useState } from 'react';
import { 
  Text, 
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  TextInput 
} from 'react-native';

export default function LandingPage({transition, guestArScene}) {

const [accessCode, setAccessCode] = useState('')

  return (
    <ImageBackground source={require('../res/northern-lights.jpg')} style={localStyles.outer} >
      <ImageBackground style={localStyles.inner} >

        <Text style={localStyles.titleText}>
          Tap here to start your Trekk
        </Text>

        <TouchableHighlight style={localStyles.buttons}
          onPress={() => transition("LOGIN")}
        >

        <Text style={localStyles.buttonText}>AR</Text>
        </TouchableHighlight>

        <TextInput
            placeholder = "Access Code"
            onChangeText= {(n) => {setAccessCode(n)}}
            style={localStyles.text}
          />

        <TouchableHighlight style={localStyles.buttons}
          onPress={() => guestArScene(accessCode)}
        >

        <Text style={localStyles.buttonText}>Enter</Text>
        </TouchableHighlight>

      </ImageBackground>
    </ImageBackground>
  );
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
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
    fontSize: 40,
    marginBottom: 20,
    alignItems: 'center'
  },
  buttonText: {
    backgroundColor:'#68a0ff',
    textAlign:'center',
    fontSize : 33,
    // paddingTop: 10,
    borderColor: "black",
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
  },
})