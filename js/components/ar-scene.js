import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { ViroARSceneNavigator} from 'react-viro';
import InitialARScene from '../ArEnvironment';


export default function ArScene({transition, localStyles, userMarkers}) {
  return (
    <>
    <ImageBackground style={{height: 150}} source={require('../res/Beach.jpg')}>
      <Text style={localStyles.headerText} onPress = {() => transition("DASHBOARD", true)}>
        Jackson, Frank, Adam
      </Text>
    </ImageBackground>
    <ViroARSceneNavigator 
      autofocus = {true}
      viroAppProps = {userMarkers}
      initialScene={{scene: InitialARScene}} />
    </>
  );
}