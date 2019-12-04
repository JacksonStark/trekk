'use strict';

import React, { useState } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroBox,
  ViroImage,
  ViroNode,
  ViroVideo,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
  ViroFlexView
} from 'react-viro';

ViroAnimations.registerAnimations({
  loopRotate: {properties: {rotateZ: "+=45"}, duration: 250},
});


let cameraPos;

export default function ArEnvironment({sceneNavigator}) {
  const [visibility, setVisibility] = useState({})

  const onAnchorUpdated = (anchor, currentMarker) => {

    console.log('Marker--Camera Distance', Math.abs(anchor.position[2] - cameraPos[2]))

    Math.abs(anchor.position[0] - cameraPos[0]) < 0.8 &&
    Math.abs(anchor.position[1] - cameraPos[1]) < 0.8 &&
    Math.abs(anchor.position[2] - cameraPos[2]) < 0.8
    ? setVisibility((prev) => ({...prev, [currentMarker]: true}))
    : setVisibility((prev) => ({...prev, [currentMarker]: false}))

  }

  const onCameraTransformUpdate = (cam) => {
    cameraPos = cam.position
  }

  const onClick = (anchor, currentMarker) => {
    console.log(visibility[currentMarker])

    visibility[currentMarker]
    ? setVisibility((prev) => ({...prev, [currentMarker]: false}))
    : setVisibility((prev) => ({...prev, [currentMarker]: true}))
  }

  const imageMarkers = sceneNavigator.viroAppProps.map((marker, index) => {
    let currentMarker = 'marker' + index

    let targetObj = {}

    targetObj[currentMarker] = {
    source : {uri: marker.marker_image},
    orientation : "Up",
    physicalWidth : 0.2, // real world width in meters
    }

    ViroARTrackingTargets.createTargets(targetObj);

    visibility[currentMarker] === undefined ? setVisibility((prev) => ({...prev, [currentMarker]: false})) : null

    let SD = marker.spawned_description
    let SI = ""
    let SV = marker.spawned_video

    return(

      <ViroARImageMarker key={currentMarker} target={currentMarker} onAnchorUpdated={((anchor) => onAnchorUpdated(anchor, currentMarker))}>

        <ViroDirectionalLight color="#FFFFFF" direction={[0, -1, 0]} shadowOrthographicPosition={[0, 3, -5]} shadowOrthographicSize={10}
          shadowNearZ={2} shadowFarZ={9} castsShadow={true} />

        <ViroAmbientLight color='#ffffff' />

        <Viro3DObject rotation={[-90, 0, 0]} source={require('./res/object_star_anim.vrx')} position={[0, 0, 0.15]} scale={[0.05, 0.05, 0.05]} 
          type="VRX" onClick={(anchor) => onClick(anchor, currentMarker)} animation={{name:'loopRotate', run:true, loop:true}} />

        <ViroFlexView position={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}} visible={visibility[currentMarker]}>

          {SD !== "" && SI !== "" && SV !== "" && (
            <>
              <ViroText position={[-0.5, 0.05, 0.2]} rotation={[0, 45, 0]} scale={[0.1, 0.1]} text="Hello, welcome to our AR tour, we worked night and day to bring you our best product, hope you enjoy, and feel free to donate. If you are here for McDonalds its two blocks down and on your left, OK :)" style={styles.viroText} height={5} width={5} /> 
              <ViroImage position={[0, 0.05, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: 'https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/o4adpfwd3m5041chd8k5/wendy-william-sirius' }} />
              <ViroVideo position={[0.5, 0.05, 0.2]} rotation={[0, -45, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: SV }}  loop={true}  volume={1} />
            </>
          )}

          {SD !== "" && SI !== "" && SV === "" && (
            <>
              <ViroText position={[-0.25, 0.05, 0]} rotation={[0, 20, 0]} scale={[0.1, 0.1]} text="Hello, welcome to our AR tour, we worked night and day to bring you our best product, hope you enjoy, and feel free to donate. If you are here for McDonalds its two blocks down and on your left, OK :)" style={styles.viroText} height={5} width={5} /> 
              <ViroImage position={[0.25, 0.05, 0]} rotation={[0, -20, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: 'https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/o4adpfwd3m5041chd8k5/wendy-william-sirius' }} />
            </>
          )}

          {SD !== "" && SI === "" && SV !== "" && (
            <>
              <ViroText position={[-0.25, 0.05, 0]} rotation={[0, 20, 0]} scale={[0.1, 0.1]} text="Hello, welcome to our AR tour, we worked night and day to bring you our best product, hope you enjoy, and feel free to donate. If you are here for McDonalds its two blocks down and on your left, OK :)" style={styles.viroText} height={5} width={5} /> 
              <ViroVideo position={[0.25, 0.05, 0]} rotation={[0, -20, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: SV }}  loop={true}  volume={1} />
            </>
          )}

          {SD === "" && SI !== "" && SV !== "" && (
            <>
              <ViroImage position={[-0.25, 0.05, 0]} rotation={[0, 20, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: 'https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/o4adpfwd3m5041chd8k5/wendy-william-sirius' }} />
              <ViroVideo position={[0.25, 0.05, 0]} rotation={[0, -20, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: SV }}  loop={true}  volume={1} />
            </>
          )}

          {SD !== "" && SI === "" && SV === "" && (
              <ViroText position={[0, 0.05, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.1]} text="Hello, welcome to our AR tour, we worked night and day to bring you our best product, hope you enjoy, and feel free to donate. If you are here for McDonalds its two blocks down and on your left, OK :)" style={styles.viroText} height={5} width={5} /> 
          )}

          {SD === "" && SI !== "" && SV === "" && (
              <ViroImage position={[0, 0.05, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: 'https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/o4adpfwd3m5041chd8k5/wendy-william-sirius' }} />        
          )}

          {SD === "" && SI === "" && SV !== "" && (
              <ViroVideo position={[0, 0.05, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.066]} height={5} width={5} source={{ uri: SV }}  loop={true}  volume={1} />
          )}

        </ViroFlexView>

      </ViroARImageMarker> 
    )
  })

  return (
    <ViroARScene onCameraTransformUpdate={(e) => onCameraTransformUpdate(e)}>
      {imageMarkers}
    </ViroARScene>
  )

}

var styles = StyleSheet.create({
  viroText: {
    fontFamily: 'Arial',
    fontSize: 40,
    color: '#cc0000',
    textAlignVertical: 'center',
    textAlign: 'center',  
  }
});