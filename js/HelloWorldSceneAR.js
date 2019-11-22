'use strict';

import React, { useState } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
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

    return (
      <ViroARScene onTrackingUpdated={onInitialized} >
      {/* VIRO TEXTBOX (Width, Height) */}
        <ViroText width={2} height={2} text={text} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
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
