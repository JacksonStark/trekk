import React, { useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  ImageBackground
 } from 'react-native';


export default function Register({transition}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const collector = {}
  
  collector['email'] = email
  collector['password'] = password
  
  console.log(collector)

  return (
    <ImageBackground source={require("../res/Register-Background.jpg")} style={localStyles.outer}>
      <ImageBackground style={localStyles.inner}>

        <Text>
          Register
        </Text>

        <TextInput
          placeholder = "Enter e-mail."
          onChangeText= {(email) => {setEmail(email)}}
          value = {email}
          style={localStyles.text}
        />

        <TextInput 
          placeholder = "Enter password."
          onChangeText= {(password) => {setPassword(password)}}
          value = {password}
          style={localStyles.text}
        />

        <Button 
          title = "Enter"
          onPress={() => transition("DASHBOARD")}
        />

        <Button 
          title = "Back to Login"
          onPress={() => transition("LOGIN", true)}
        />
      </ImageBackground>
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
  }
})