import React, { useState } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
 } from 'react-native';


export default function Dashboard({userTrekks, switchTrekk, addTrekk, deleteTrekk, logout}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);


  trekks = userTrekks.map((trekk) => {
    return (
      <>
        <Text style={localStyles.text} onPress={() => switchTrekk(trekk, "AR_SCENE")}>
          {trekk.name}
        </Text>
        <Text style={localStyles.text}>
          {trekk.access_code}
        </Text>

        <TouchableOpacity
          onPress={() => switchTrekk(trekk, "CREATE_EDIT")}
        >
        <Text style={localStyles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => deleteTrekk(trekk.id)}
        >
        <Text style={localStyles.text}>Delete</Text>
        </TouchableOpacity>
      </>
    )
  })

  return (
    
    <View style={localStyles.outer}>

      {/* <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} /> */}

      {/* <KeyboardAvoidingView behavior="padding" enabled> */}

      <ScrollView contentContainerStyle={localStyles.inner}>
        <Text style={localStyles.titleText}>
          My trekks
        </Text>

        {trekks}


          <TextInput 
            placeholder = "Enter your Trekk name."
            onChangeText= {(name) => {setName(name)}}
            value = {name}
            placeholderTextColor = "white"
            style = {localStyles.text}
            // autoFocus={true}
          />


        <TouchableOpacity 
          onPress={() => addTrekk(name)}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Create</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => logout()}
          style = {localStyles.buttons}
        >
        <Text style = {localStyles.buttonText}>Logout</Text>
        </TouchableOpacity>

    </ScrollView>
    {/* </KeyboardAvoidingView> */}
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