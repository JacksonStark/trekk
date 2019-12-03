import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { ViroARSceneNavigator} from 'react-viro';
import InitialARScene from '../ArEnvironment';


export default function ArScene({transition, userMarkers, currentUser}) {
  return (
    <View style={{flex: 1}} >

      <ViroARSceneNavigator 
        viroAppProps = {userMarkers}
        initialScene={{scene: InitialARScene}} />
        
      <View style={{position: 'absolute', top: 25, left: 25}}>
        <TouchableOpacity onPress = {() => currentUser ? transition("DASHBOARD", true) : transition("LANDING_PAGE")}>
          <Image style={{width: 70, height: 70}} source={require('../res/back-button.png')}></Image>
        </TouchableOpacity>
      </View>

    </View>
  );
}