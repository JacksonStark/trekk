import React, { useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity
 } from 'react-native';


export default function Dashboard({transition, userTrekks, switchTrekk}) {
  
  // trekTitles =  [
  //   {id: 0, title: 'The Beach' },
  //   {id: 1, title: 'The Ocean' },
  //   {id: 3, title: 'The Jungle' },
  //   {id: 4, title: 'The Rainforest' },
  //   {id: 5, title: 'The Desert' },
  //   {id: 6, title: 'The Arctic' }

  // ]

  trekks = userTrekks.map((trekk) => {
    return (
      <>
        <Text style={localStyles.text} onPress = {() => transition('AR_SCENE')}>
          {trekk.name}
        </Text>
        <Text style={localStyles.text}>
          {trekk.access_code}
        </Text>
        <Button
          title="Edit"
          color="red"
          // onPress={() => console.log('EDIT TREK', trekk.id)}
          onPress={() => switchTrekk(trekk.id)}
        />
      </>
    )
  })

  return (
    <ImageBackground source={require('../res/northern-lights.jpg')} style={localStyles.outer}>
      <ImageBackground style={localStyles.inner}>
        <Text style={localStyles.titleText}>
          My trekks
        </Text>

        {trekks}

        <TouchableOpacity 
          // onPress={() => switchTrekk()}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Create</Text>
        </TouchableOpacity>
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
    marginTop: 20,
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
  },
  titleText: {
    color: "cyan",
    fontSize: 50,
    marginBottom: 20,
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