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
  TouchableOpacity
 } from 'react-native';

export default function CreateEdit({transition, currentUser, currentTrekks, currentMarkers, goToAddMarker}) {

  // const [name, setName] = useState('')

  // const markersData = [
  //   {
  //     id: 1,
  //     name: 'Tits',
  //     markerImage: 'https://img.ev.mu/images/regions/91/600x400/91.jpg',
  //     spawnedDescription: "This is Guadalupe. TITS",
  //     spawnedImage: null,
  //     spawnedVideo: null
  //   },
  //   {
  //     id: 2,
  //     name: 'Magnemite',
  //     markerImage: 'https://img.ev.mu/images/attractions/1336/600x400/1851.jpg',
  //     spawnedDescription: null,
  //     spawnedImage: "http://static.pokemonpets.com/images/monsters-images-800-800/81-Magnemite.png",
  //     spawnedVideo: null
  //   },
  //   {
  //     id: 3,
  //     name: 'Fireworks',
  //     markerImage: 'https://www.kitchentreaty.com/wp-content/uploads/2017/02/how-to-make-heart-shaped-pizzas-featured-660x430.jpg',
  //     spawnedDescription: null,
  //     spawnedImage: null,
  //     spawnedVideo: 'https://v.ftcdn.net/02/29/37/75/700_F_229377542_Y4dQ5kuAj6FPafId0XIdZ9jKcDQykYF8_ST.mp4'
  //   }
  // ]

  const markers = currentMarkers.map((marker) => {
    console.log('IN CREATE-EDIT:', marker.spawned_description)
    return (
      <View>
        <Text>
          Marker Image:
        </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: marker.marker_image}}
        />
        <Text>
          {marker.spawned_description && (
            <Text>Displays text.</Text>
          )}

          {marker.spawned_image && (
            <Text>Displays an image.</Text>
          )}

          {marker.spawned_video && ( 
            <Text>Displays a video.</Text>
          )}
        </Text>
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
            style={localStyles.text}
          />

          <Text>
            Current Markers:
          </Text>

          {markers}

          <TouchableOpacity 
          onPress={() => goToAddMarker()}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Add Marker</Text>
        </TouchableOpacity>

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