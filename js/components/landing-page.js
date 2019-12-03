import React, { useState } from 'react';
import { 
  Text, 
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

import axios from "axios";

export default function LandingPage({transition, guestArScene}) {

const [accessCode, setAccessCode] = useState('')
const [error, setError] = useState('')

const validate = () => {

  accessCode === "" ? setError("Please enter an access code.")
  : 
  axios.get(`http://trekk.herokuapp.com/trekks/guest/${accessCode}`)
  .then((res) => {
    res.data.markers ? guestArScene(res.data.markers) : setError('Invalid Access Code')
  })
}

  return (
    <View style={localStyles.outer}>

      <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} />

      <KeyboardAvoidingView style={{flexDirection: 'row',
        alignItems:'center'}}  behavior="padding" enabled>


        <ScrollView contentContainerStyle={localStyles.inner} >
          <Image
            style={{width: 200, height: 35, marginTop: 100, marginBottom: 80}}
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
                placeholder = "Enter Here"
                placeholderTextColor = "rgba(255,255,255, 0.5)"
                onChangeText= {(n) => {setAccessCode(n)}}
                style={localStyles.textForm}
                onFocus={() => setError("")}
              />

            <TouchableHighlight style={localStyles.button2}
              onPress={() => validate()}
            >
              <Text style={localStyles.buttonText}>ENTER</Text>
            </TouchableHighlight>
          </View>

          { error ? (
            <TouchableOpacity style={localStyles.errorBox}>
              <Text style={localStyles.errorText}>{error}</Text>
            </TouchableOpacity>
            ) : null }

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
  },
  inner: {
    flexGrow : 1,
    flexDirection: 'column',
    alignItems:'center',
  },
  background: {
    width: Dimensions.get("window").width, //for full screen
    // height: Dimensions.get("window").height, //for full screen
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
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
  errorBox: {
    position: "absolute",
    bottom: 25,
    padding: 10,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    opacity: 0.8
  },
  errorText: {
    color: "black",
    fontStyle: "italic",
    fontSize: 16
  },
  loginRegister: {
    // flex:1,
    // paddingTop: "20%",
    paddingTop: 20,
    paddingBottom: 10,
    margin: 10,
    // top: "3%",
    // top: 10,
    backgroundColor: "transparent",
  },
  accessButtonHolder: {
    // flex: 1,
    // top: "8%",
    // top: 24,
    marginTop: 80,
    alignItems:'center',
    // justifyContent: 'flex-end'
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
    // fontWeight: "bold",
    backgroundColor:'transparent',
    color: 'white',
    textAlign:'center',
    fontSize : 33,
    borderColor: "white",
    letterSpacing: 5,
    margin: 5
  },
  buttons : {
    // height: 40,
    // width: 300,
    // paddingTop:5,
    // paddingBottom:5,
    // marginTop: 50,
    marginBottom: 15,
    // backgroundColor:'transparent',
  },
  button2 : {
    // height: 60,
    // width: 150,
    padding: 5,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor:'transparent',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
  },
})
