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
import { makeEmptyAggregatedTestResult } from '@jest/test-result';

// const markers = {
//   first: false,
//   second: true
// }

const userMarkers = [
  {
    id: 1,
    markerImage: 'https://img.ev.mu/images/regions/91/600x400/91.jpg',
    spawnedDescription: "This is Guadalupe. TITS",
    spawnedImage: null,
    spawnedVideo: null
  },
  {
    id: 2,
    markerImage: 'https://img.ev.mu/images/attractions/1336/600x400/1851.jpg',
    spawnedDescription: null,
    spawnedImage: "http://static.pokemonpets.com/images/monsters-images-800-800/81-Magnemite.png",
    spawnedVideo: null
  },
  {
    id: 3,
    markerImage: 'https://www.kitchentreaty.com/wp-content/uploads/2017/02/how-to-make-heart-shaped-pizzas-featured-660x430.jpg',
    spawnedDescription: null,
    spawnedImage: null,
    spawnedVideo: 'https://v.ftcdn.net/02/29/37/75/700_F_229377542_Y4dQ5kuAj6FPafId0XIdZ9jKcDQykYF8_ST.mp4'
  },
]

let cameraPos;

export default function HelloWorldSceneAR(props) {
  const [text, setText] = useState("Initializing AR...")
  const [show, setShow] = useState(false)
  const [visibility, setVisibility] = useState({})

  const onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      setText('Hi there! Welcome to Jackson, Frank, and Adam\'s AR tour. Have fun and give feedback!')
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  const onAnchorUpdated = (anchor, currentMarker) => {

    console.log('Marker--Camera Distance', Math.abs(anchor.position[2] - cameraPos[2]))

    Math.abs(anchor.position[0] - cameraPos[0]) < 0.8 &&
    Math.abs(anchor.position[1] - cameraPos[1]) < 0.8 &&
    Math.abs(anchor.position[2] - cameraPos[2]) < 0.8
    ? setVisibility((prev) => ({...prev, [currentMarker]: true}))
    : setVisibility((prev) => ({...prev, [currentMarker]: false}))
    // ? setVisibility(true)
    // : setVisibility(false)

  }

  const onCameraTransformUpdate = (cam) => {
    cameraPos = cam.position
  }

  const onClick = (e) => {
    show ? setShow(false) : setShow(true)
  }

  // ViroARTrackingTargets.createTargets({
  //   "qr" : {
  //     source : require('./res/qr.png'),
  //     orientation : "Up",
  //     physicalWidth : 0.2, // real world width in meters
  //   },
  //   "rubber-duck" : {
  //     source : require('./res/rubber-duck.jpg'),
  //     orientation : "Up",
  //     physicalWidth : 0.2, // real world width in meters
  //   }
  // });

  const imageMarkers = userMarkers.map((marker, index) => {
    let currentMarker = 'marker' + index

    let targetObj = {}

    targetObj[index] = {
    source : {uri: marker.markerImage},
    orientation : "Up",
    physicalWidth : 0.2, // real world width in meters
    }

    ViroARTrackingTargets.createTargets(targetObj);

    visibility ? null : setVisibility((prev) => ({...prev, [currentMarker]: true}))

    return(

      <ViroARImageMarker target={index} onAnchorUpdated={(anchor) => onAnchorUpdated(anchor, currentMarker)} visible={visibility[currentMarker]}>

      {/* <ViroImage rotation={[-90, 0, 0]} position={[0,0,0]} scale={[0.3, 0.3, 0.3]} source={{uri: marker.spawnedImage}} onClick={(e) => onClick(e)} resizeMode={'scaleToFill'} /> */}

      <ViroNode position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}}>
        {marker.spawnedDescription && (
          <ViroText text={marker.spawnedDescription} scale={[0.3, 0.3, 0.3]} position={[0, 0, -0.1]} style={styles.viroText} />
        )}

        {marker.spawnedImage && (
          <ViroImage position={[0,0,0]} scale={[0.3, 0.3, 0.3]} source={{uri: marker.spawnedImage}} onClick={(e) => onClick(e)} resizeMode={'scaleToFill'} />
        )}

        {marker.spawnedVideo && ( 
          <ViroVideo height={0.8} width={1.4} source={{uri: marker.spawnedVideo}} loop={true} position={[0,0,0]} material={[marker.markerImage]} scale={[0.2, 0.2, 0.2]} volume={1} />
        )}
      </ViroNode>

      </ViroARImageMarker> 
    )

  })
  
  // return (
  // <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={(e) => onCameraTransformUpdate(e)}>
  //   {/* VIRO TEXTBOX (Width, Height) */}
  //     <ViroARImageMarker target={"rubber-duck"} onAnchorUpdated={(e) => onAnchorUpdated(e)} visible={visibility}>

  //         <ViroNode position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}}>
  //         <ViroImage height={0.2} width={0.2} source={require('./res/Beach.jpg')} onClick={(e) => onClick(e)}/>
  //           <ViroText height={2} width={2} text={text} scale={[0.5, 0.5, 0.5]} position={[0, 2, -1]} visible={show} style={styles.viroText}/>
  //         </ViroNode>

  //     </ViroARImageMarker>

  //     <ViroARImageMarker target={"qr"} onAnchorUpdated={(e) => onAnchorUpdated(e)}>

  //         <ViroNode position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}} visible={visibility} >
  //           <ViroImage height={0.2} width={0.2} source={require('./res/Guadalupe.jpg')} onClick={(e) => onClick(e)} />
  //           <ViroText height={1} width={2} text={text} scale={[0.5, 0.5, 0.5]} position={[0, 0.8, -1]} visible={show} style={styles.viroText}/>
  //         </ViroNode>

  //     </ViroARImageMarker>
  //   </ViroARScene>
  // );

  return (
    <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={(e) => onCameraTransformUpdate(e)}>
      {imageMarkers}
    </ViroARScene>
  )

}












var styles = StyleSheet.create({
  viroText: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#ff0000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  }
});

module.exports = HelloWorldSceneAR;
