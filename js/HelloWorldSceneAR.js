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
  ViroBox,
  ViroImage,
  ViroNode,
  ViroVideo
} from 'react-viro';

// const markers = {
//   first: false,
//   second: true
// }

let cameraPos;

export default function HelloWorldSceneAR(props) {
  const [text, setText] = useState("Initializing AR...")
  const [show, setShow] = useState(false)
  const [visibility, setVisibility] = useState(true)

  const onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      setText('Hi there! Welcome to Jackson, Frank, and Adam\'s AR tour. Have fun and give feedback!')
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  const onAnchorUpdated = (anchor) => {

    console.log('Marker--Camera Distance', Math.abs(anchor.position[2] - cameraPos[2]))

    Math.abs(anchor.position[0] - cameraPos[0]) < 0.8 &&
    Math.abs(anchor.position[1] - cameraPos[1]) < 0.8 &&
    Math.abs(anchor.position[2] - cameraPos[2]) < 0.8
    ? setVisibility(true) : setVisibility(false)

  }

  const onCameraTransformUpdate = (cam) => {
    cameraPos = cam.position
  }

  const onClick = (e) => {
    show ? setShow(false) : setShow(true)
  }

  ViroARTrackingTargets.createTargets({
    "qr" : {
      source : require('./res/qr.png'),
      orientation : "Up",
      physicalWidth : 0.2, // real world width in meters
    },
    "rubber-duck" : {
      source : require('./res/rubber-duck.jpg'),
      orientation : "Up",
      physicalWidth : 0.2, // real world width in meters
    }
  });
  
  return (
  <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={(e) => onCameraTransformUpdate(e)}>
    {/* VIRO TEXTBOX (Width, Height) */}
      <ViroARImageMarker target={"rubber-duck"} onAnchorUpdated={(e) => onAnchorUpdated(e)} visible={visibility}>

          <ViroNode position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}}>
          <ViroImage height={0.2} width={0.2} source={require('./res/Beach.jpg')} onClick={(e) => onClick(e)}/>
            <ViroText height={2} width={2} text={text} scale={[0.5, 0.5, 0.5]} position={[0, 2, -1]} visible={show} style={styles.viroText}/>
          </ViroNode>

      </ViroARImageMarker>

      <ViroARImageMarker target={"qr"} onAnchorUpdated={(e) => onAnchorUpdated(e)}>

          <ViroNode position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}} visible={visibility} >
            <ViroImage height={0.2} width={0.2} source={require('./res/Guadalupe.jpg')} onClick={(e) => onClick(e)} />
            <ViroText height={1} width={2} text={text} scale={[0.5, 0.5, 0.5]} position={[0, 0.8, -1]} visible={show} style={styles.viroText}/>
          </ViroNode>

      </ViroARImageMarker>
    </ViroARScene>
  );

}

var styles = StyleSheet.create({
  viroText: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ff0000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  }
});

module.exports = HelloWorldSceneAR;
