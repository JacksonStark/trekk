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
  ViroVideo,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations
} from 'react-viro';

ViroAnimations.registerAnimations({
  loopRotate: {properties: {rotateZ: "+=45"}, duration: 250},
});

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
  // const [show, setShow] = useState(false)
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

  //   Math.abs(anchor.position[0] - cameraPos[0]) < 0.8 &&
  //   Math.abs(anchor.position[1] - cameraPos[1]) < 0.8 &&
  //   Math.abs(anchor.position[2] - cameraPos[2]) < 0.8
  //   ? setVisibility((prev) => ({...prev, [currentMarker]: true}))
  //   : setVisibility((prev) => ({...prev, [currentMarker]: false}))

  }

  const onCameraTransformUpdate = (cam) => {
    cameraPos = cam.position
  }

  const onClick = (anchor, currentMarker) => {
    console.log(visibility[currentMarker])

    visibility[currentMarker]
    ? setVisibility((prev) => ({...prev, [currentMarker]: false}))
    : setVisibility((prev) => ({...prev, [currentMarker]: true}))

    // show ? setShow(false) : setShow(true)
  }

  const imageMarkers = userMarkers.map((marker, index) => {
    let currentMarker = 'marker' + index

    let targetObj = {}

    targetObj[currentMarker] = {
    source : {uri: marker.markerImage},
    orientation : "Up",
    physicalWidth : 0.2, // real world width in meters
    }

    ViroARTrackingTargets.createTargets(targetObj);

    visibility[currentMarker] === undefined ? setVisibility((prev) => ({...prev, [currentMarker]: false})) : null

    return(

      <ViroARImageMarker key={currentMarker} target={currentMarker} onAnchorUpdated={((anchor) => onAnchorUpdated(anchor, currentMarker))}>

        <ViroDirectionalLight color="#FFFFFF" direction={[0, -1, 0]} shadowOrthographicPosition={[0, 3, -5]} shadowOrthographicSize={10}
          shadowNearZ={2} shadowFarZ={9} castsShadow={true} />

        <ViroAmbientLight color='#ffffff' />

        <Viro3DObject rotation={[-90, 0, 0]} source={require('./res/object_star_anim.vrx')} position={[0, 0, 0.15]} scale={[0.05, 0.05, 0.05]} 
          type="VRX" onClick={(anchor) => onClick(anchor, currentMarker)} animation={{name:'loopRotate', run:true, loop:true}} />

        <ViroNode position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}} visible={visibility[currentMarker]}>
          {marker.spawnedDescription && (
            <ViroText text={marker.spawnedDescription} scale={[0.3, 0.3, 0.3]} position={[0, 0, -0.1]} style={styles.viroText} />
          )}

          {marker.spawnedImage && (
            <ViroImage position={[0,0,0]} scale={[0.3, 0.3, 0.3]} source={{uri: marker.spawnedImage}} resizeMode={'ScaleToFill'} />
          )}

          {marker.spawnedVideo && ( 
            <ViroVideo height={0.8} width={1.4} source={{uri: marker.spawnedVideo}} loop={true} position={[0,0,0]} scale={[0.2, 0.2, 0.2]} volume={1} />
          )}
        </ViroNode>

      </ViroARImageMarker> 
    )

  })

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
