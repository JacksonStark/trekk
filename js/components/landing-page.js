import React, { useState } from 'react';
import { 
  Text, 
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

export default function LandingPage({transition, guestArScene}) {

const [accessCode, setAccessCode] = useState('')

  return (
    <ImageBackground source={require('../res/northern-lights.jpg')} style={localStyles.outer} >
      <ImageBackground style={localStyles.inner} >

        <Image
          style={{width: 200, height: 35}}
          source={require('../res/trekkLogo.png')}
        />

        <View style={localStyles.loginRegister}>

        <TouchableOpacity style={localStyles.buttons}
          onPress={() => transition("LOGIN")}
        >
        <Text style={localStyles.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress = {() => transition("REGISTER")}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        </View>

        <View style={localStyles.accessButtonHolder}>

        <Text style={localStyles.text}>
          ACCESS CODE
        </Text>

        <TextInput
            placeholder = ""
            onChangeText= {(n) => {setAccessCode(n)}}
            style={localStyles.textForm}
          />

        <TouchableHighlight style={localStyles.button2}
          onPress={() => guestArScene(accessCode)}
        >
        <Text style={localStyles.buttonText}>ENTER</Text>
        </TouchableHighlight>

        </View>

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
    fontSize: 25,
    letterSpacing: 5
  },
  textForm: {
    marginTop: 20,
    color: "white",
    fontSize: 25,
    width: 300,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  loginRegister: {
    paddingTop: "20%",
    paddingBottom: 30,
    margin: 10,
    top: "3%",
    backgroundColor: "transparent"
  },
  accessButtonHolder: {
    top: "8%",
    marginTop: "5%",
    alignItems:'center'
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
    fontWeight: "100",
    backgroundColor:'transparent',
    color: 'white',
    textAlign:'center',
    fontSize : 33,
    borderColor: "white",
    letterSpacing: 5,
  },
  buttons : {
    height: 40,
    width: 300,
    paddingTop:5,
    paddingBottom:5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'transparent',
  },
  button2 : {
    height: 60,
    width: 150,
    paddingTop:5,
    paddingBottom:5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'transparent',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
  },
})