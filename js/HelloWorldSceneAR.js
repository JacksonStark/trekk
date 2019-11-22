'use strict';

import React, { useState } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroFlexView,
  ViroBox
} from 'react-viro';

export default function HelloWorldSceneAR(props) {
  const [text, setText] = useState("Initializing AR...")

  const onInitialized = (state, reason) => {
    console.log('STATE', state)
    if (state == ViroConstants.TRACKING_NORMAL) {
      setText('Jackson, Frank, Adam')
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  ViroARTrackingTargets.createTargets({
    "targetOne" : {
      source : require('./res/rubber-duck.jpg'),
      orientation : "Up",
      physicalWidth : 0.1 // real world width in meters
    },
  });

  return (
    <ViroARScene onTrackingUpdated={onInitialized} >
    {/* VIRO TEXTBOX (Width, Height) */}
      <ViroARImageMarker target={"targetOne"}>
        {/* <ViroBox position={[0, .25, 0]} scale={[1, 1, 1]} /> */}
        {/* <ViroNode position={[0, .25, 0]}> */}
        <ViroFlexView height={2} width={2}>
          <ViroText width={2} height={2} text={text} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        </ViroFlexView>
          {/* <ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} /> */}
        {/* </ViroNode> */}
      </ViroARImageMarker>
    </ViroARScene>
  );


}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ff0000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
