import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { ViroARSceneNavigator} from 'react-viro';
import InitialARScene from '../ArEnvironment';


export default function ArScene({transition, localStyles, userMarkers, currentUser}) {
  return (
    <>
    <ImageBackground style={{height: 150}} source={require('../res/Beach.jpg')}>
      <Text style={localStyles.headerText} onPress = {() => currentUser ? transition("DASHBOARD", true) : transition("LANDING_PAGE")}>
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