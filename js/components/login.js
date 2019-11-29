import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  Dimensions
 } from 'react-native';
 import axios from 'axios';


export default function Login({transition, switchUser}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const collector = {}
  
  collector['email'] = email
  collector['password'] = password
  
  console.log('EMAIL: ', email, 'PASSWORD: ', password)

    const checkUser = () => {
      // axios.get(`http://192.168.88.16:3000/sessions/create?email=${email}&password=${password}`, {"Content-Type": "application/x-www-form-urlencoded",
      axios.get(`http://trekk.herokuapp.com/sessions/create?email=${email}&password=${password}`)
      // Accept: "application/json"})
      
      .then((res) => {
        // console.log(res.data.user_id)
        res.data.user_id ? switchUser(res.data.user_id) : null
      })
      .catch(err => console.log(err))
    }

  return (
    <View style={localStyles.outer}>

      <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} />

      <ScrollView contentContainerStyle={localStyles.inner}>

        <Text style={localStyles.titleText}>
          Login
        </Text>

        <TextInput
          placeholder = "Enter your e-mail."
          onChangeText= {(email) => {setEmail(email)}}
          value = {email}
          placeholderTextColor = "white"
          style = {localStyles.text}
        />

        <TextInput 
          placeholder = "Enter your password."
          onChangeText= {(password) => {setPassword(password)}}
          value = {password}
          placeholderTextColor = "white"
          style = {localStyles.text}
        />

        <TouchableOpacity 
          onPress = {() => checkUser()}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Enter</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress = {() => transition("REGISTER")}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Register</Text>
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