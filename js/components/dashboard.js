import React, { useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  ImageBackground,
 } from 'react-native';


export default function Dashboard({transition}) {
  
  trekTitles =  [
    {id: 0, title: 'The Beach' },
    {id: 1, title: 'The Ocean' },
    {id: 3, title: 'The Jungle' },
    {id: 4, title: 'The Rainforest' },
    {id: 5, title: 'The Desert' },
    {id: 6, title: 'The Arctic' }

  ]

  trekks = trekTitles.map((trek) => {
    return (
      <>
        <Text style={localStyles.text}>
          {trek.title}
        </Text>
        <Button
          title="Edit"
          color="red"
          onPress={() => console.log('EDIT TREK', trek.id)}
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
  }
})