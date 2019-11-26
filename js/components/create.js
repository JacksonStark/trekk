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

export default function Create({transition}) {

  const [name, setName] = useState('')
  const [description, setDescription = useState('')]

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

          <Text>
            Description:
          </Text>
          
          <TextInput
            placeholder = "Description of Trekk"
            onChangeText= {(n) => {setDescription(n)}}
            style={localStyles.text}
          />

          <Text>
            Current Markers:
          </Text>

          <Text>
            There are currently no markers in this Trekk.
          </Text>

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