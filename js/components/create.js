import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableHighlight, 
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  Image
 } from 'react-native';

export default function Create({transition}) {

  const [name, setName] = useState('')

  const markersData = [
    {
      id: 1,
      name: 'Tits',
      markerImage: 'https://img.ev.mu/images/regions/91/600x400/91.jpg',
      spawnedDescription: "This is Guadalupe. TITS",
      spawnedImage: null,
      spawnedVideo: null
    },
    {
      id: 2,
      name: 'Magnemite',
      markerImage: 'https://img.ev.mu/images/attractions/1336/600x400/1851.jpg',
      spawnedDescription: null,
      spawnedImage: "http://static.pokemonpets.com/images/monsters-images-800-800/81-Magnemite.png",
      spawnedVideo: null
    },
    {
      id: 3,
      name: 'Fireworks',
      markerImage: 'https://www.kitchentreaty.com/wp-content/uploads/2017/02/how-to-make-heart-shaped-pizzas-featured-660x430.jpg',
      spawnedDescription: null,
      spawnedImage: null,
      spawnedVideo: 'https://v.ftcdn.net/02/29/37/75/700_F_229377542_Y4dQ5kuAj6FPafId0XIdZ9jKcDQykYF8_ST.mp4'
    }
  ]

  const markers = markersData.map((marker) => {
    return (
      <View>
        <Text>
          Marker Name: {marker.name}
        </Text>
        <Text>
          Marker Image:
        </Text>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: marker.markerImage}}
        />
        {marker.spawnedDescription && (
          <Text>Displays text.</Text>
        )}

        {marker.spawnedImage && (
          <Text>Displays an image.</Text>
        )}

        {marker.spawnedVideo && ( 
          <Text>Displays a video.</Text>
        )}
        </View>
    )
  })

  return (
    <ImageBackground style={localStyles.outer}>
      <View style={localStyles.inner}>

          <Text>
            Create New Trekk
          </Text>

          <Text>
            Name:
          </Text>
          
          <TextInput
            placeholder = "Name of Trekk"
            onChangeText= {(n) => {setName(n)}}
            style={localStyles.text}
          />

          {/* <Text>
            Description:
          </Text>
          
          <TextInput
            placeholder = "Description of Trekk"
            onChangeText= {(n) => {setDescription(n)}}
            style={localStyles.text}
          /> */}

          <Text>
            Current Markers:
          </Text>

          {markers}

          <Button
          title = "Add New Marker"
          />

          <Button
          title = "Create Trekk"
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