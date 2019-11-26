import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableHighlight, 
  StyleSheet,
  TextInput,
  Button,
  ImageBackground
 } from 'react-native';


export default function Login({transition}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const collector = {}
  
  collector['email'] = email
  collector['password'] = password
  
  console.log(collector)

  return (
    <ImageBackground style={localStyles.outer}>
      <View style={localStyles.inner}>

          <Text>
            Login
          </Text>

          <TextInput
            placeholder = "Enter your e-mail."
            onChangeText= {(email) => {setEmail(email)}}
            value = {email}
            style={localStyles.text}
          />

          <TextInput 
            placeholder = "Enter your password."
            onChangeText= {(password) => {setPassword(password)}}
            value = {password}
            style={localStyles.text}
          />

          <Button 
            title = "Enter"
            onPress={() => console.log(collector)}
          />
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
  }
})