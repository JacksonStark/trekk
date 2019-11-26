import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import InitialARScene from '../ArEnvironment';


export default function ArScene({transition, localStyles}) {
  return (
    <>
    <ImageBackground style={{height: 150}} source={require('../res/Beach.jpg')}>
      <Text style={localStyles.headerText} onPress = {() => transition("LANDING_PAGE", true)}>
        Jackson, Frank, Adam
      </Text>
    </ImageBackground>
    <ViroARSceneNavigator 
      initialScene={{scene: InitialARScene}} />
    </>
  );
}