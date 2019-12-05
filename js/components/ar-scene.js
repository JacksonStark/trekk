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
        
      <View style={{position: 'absolute', bottom: 25, left: 25}}>
        <TouchableOpacity onPress = {() => currentUser ? transition("DASHBOARD", true) : transition("LANDING_PAGE")}>
          <Image style={{width: 70, height: 70}} source={require('../res/back-button.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', top: 40, left: 100}}>
        {/* <TouchableOpacity onPress = {() => currentUser ? transition("DASHBOARD", true) : transition("LANDING_PAGE")}> */}
          <Image style={{width: 180, height: 40}} scale source={require('../res/trekkLogoBlack.png')}></Image>
        {/* </TouchableOpacity> */}
      </View>

    </View>
  );
}