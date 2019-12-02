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
  KeyboardAvoidingView,
  Clipboard,
  Alert
 } from 'react-native';
//  import SwipeableViews from 'react-swipeable-views-native';
import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';


export default function Dashboard({userTrekks, switchTrekk, addTrekk, deleteTrekk, logout}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const printToClipboard = function (access_code) {
    Clipboard.setString(access_code)
    Alert.alert("Access Code copied to clipboard")
  }


  trekks = userTrekks.map((trekk) => {
    return (
      <SwipeableViews>
        <View style={{flex: 1, alignItems: "center"}}>
          <Text style={localStyles.text} onPress={() => switchTrekk(trekk, "AR_SCENE")}>
            {trekk.name}
          </Text>
        </View>

        <View style={localStyles.swipe_items}>
          {/* <Text style={[localStyles.text, {backgroundColor: "rgb(46,134,193)"}]}>{trekk.access_code}</Text> */}
          <Text style={[localStyles.text, {backgroundColor: "rgb(46,134,193)"}]} onPress={() => printToClipboard(trekk.access_code)}>Access Code</Text>
          <Text style={[localStyles.text, {backgroundColor: "rgb(212,172,13)"}]} onPress={() => switchTrekk(trekk, "CREATE_EDIT")}>Edit</Text>
          <Text style={[localStyles.text, {backgroundColor: "rgb(231,76,60)"}]} onPress={() => deleteTrekk(trekk.id)}>Delete</Text>
        </View>

      </SwipeableViews>
    )
  })

  return (
    
    <View style={localStyles.outer}>

      <ImageBackground source={require('../res/northern-lights.jpg')}
        style = {localStyles.background} />

      <KeyboardAvoidingView behavior="padding" enabled>

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
    </KeyboardAvoidingView>
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
  // swipe: {
  //   flex : 1,
  //   flexDirection: 'column',
  //   alignItems:'center',
  //   backgroundColor: "transparent",
  // },
  swipe_items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    color: "black",
    fontSize: 30,
    fontStyle: "italic",
    backgroundColor: "red",
    borderRadius: 20,
    borderWidth: 4,
    padding: 5,
    overflow: "hidden"
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
    textAlign:'center',
    fontSize : 22,
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
    backgroundColor:'#01B0FF',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
  },
})