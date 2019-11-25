/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { useState } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
// var sharedProps = {
//   apiKey:"API_KEY_HERE",
// }

// Sets the default scene you want for AR and VR
const InitialARScene = require('./js/HelloWorldSceneAR');

const UNSET = "UNSET";

const AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
const defaultNavigatorType = UNSET;

export default function ViroSample(props) {
  const [navigatorType, setNavigatorType] = useState(defaultNavigatorType);
  // const [sharedProps, setSharedProps] = useState(sharedProps);

  // Presents the user with a choice of an AR or VR experience
  const getExperience = () => {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            Choose your desired experience:
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={getExperienceButton(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>AR</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  const getARNavigator = () => {
    return (
      <>
      <ImageBackground style={{height: 150}} source={require('./js/res/Beach.jpg')}>
        <Text style={localStyles.headerText}>
          Jackson, Frank, Adam
        </Text>
      </ImageBackground>
      <ViroARSceneNavigator 
      // {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
      </>
    );
  }

  const getExperienceButton = (navigatorType) => {
    return () => {
      setNavigatorType(navigatorType)
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  const exitViro = () => {
    setNavigatorType(UNSET)
  }

  if (navigatorType == UNSET) {
    return getExperience();
  } else if (navigatorType == AR_NAVIGATOR_TYPE) {
    return getARNavigator();
  }

}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  headerText: {
    paddingTop: 60,
    fontSize: 33,
    textAlign:'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = ViroSample
