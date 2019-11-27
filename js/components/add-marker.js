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

export default function AddMarker({transition}) {

  const [text, setText] = useState('')

  return (
    <ImageBackground style={localStyles.outer}>
      <View style={localStyles.inner}>

          <Text>
            Create New Marker
          </Text>

          <Text>
            Marker Image:
          </Text>

          <Button
          title = "Upload Image"
          />

          <Text>
            Text To Display:
          </Text>
          
          <TextInput
            placeholder = "Name of Trekk"
            onChangeText= {(n) => {setText(n)}}
            style={localStyles.text}
          />

          <Text>
            Image To Display:
          </Text>

          <Button
          title = "Upload Image"
          />

          <Text>
            Video To Display:
          </Text>

          <Button
          title = "Upload Video"
          />

          <Button
          title = "Create Marker"
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