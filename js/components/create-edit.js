import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SwipeableListView
} from "react-native";

import SwipeableViews from "react-swipeable-views-native/lib/SwipeableViews.scroll";

export default function CreateEdit({
  refreshDashboard,
  currentTrekk,
  currentMarkers,
  goToAddMarker,
  deleteMarker
}) {

  let markers = [];

  if (currentMarkers) {
    markers = currentMarkers.map(marker => {
      return (
        <SwipeableViews>
          <View style={localStyles.swipe_items}>
            <Image
              style={[
                localStyles.image,
                {marginRight: 25, marginLeft: "12%", borderColor: "black", borderWidth: 1 }
              ]}
              source={{ uri: marker.marker_image }}
            />
            {marker.spawned_description !== "" && (
              <Image
                style={localStyles.image}
                source={require("../res/desc-icon.png")}
              />
            )}

            {marker.spawned_image !== "" && (
              <Image
                style={localStyles.image}
                source={require("../res/photo-icon.png")}
              />
            )}

            {marker.spawned_video !== "" && (
              <Image
                style={localStyles.image}
                source={require("../res/video-icon.png")}
              />
            )}
          </View>

          <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
            <Text
              style={[localStyles.text, { backgroundColor: "rgb(231,76,60)" }]}
              onPress={() => deleteMarker(marker.id)}
            >
              Delete
            </Text>
          </View>
        </SwipeableViews>
      );
    });
  }

  return (
    <View style={localStyles.outer}>
      <ImageBackground
        source={require("../res/northern-lights.jpg")}
        style={localStyles.background}
      />

      <ScrollView contentContainerStyle={localStyles.inner}>
        <Image
          style={{ width: 300, height: 55, marginTop: "15%" }}
          source={require("../res/editTrekkLogo.png")}
        />

        <Text style={[localStyles.titleText, {marginBottom: "10%"}]}>{currentTrekk.name}</Text>

        <Text style={[localStyles.titleText, {fontSize: 15, width: "95%", marginBottom: "5%"} ]}>Marker | Content Spawned</Text>

        {markers}

        <TouchableOpacity
          onPress={() => goToAddMarker()}
          style={[localStyles.buttons, {borderWidth: 2}]}
        >
          <Text style={[localStyles.buttonText, {fontSize: 15}]}>Add Marker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => refreshDashboard()}
          style={localStyles.buttons}
        >
          <Text style={localStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

var localStyles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white"
  },
  inner: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  // swipe: {
  //   flex : 1,
  //   flexDirection: 'column',
  //   alignItems:'center',
  //   backgroundColor: "transparent",
  // },
  swipe_items: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  background: {
    width: Dimensions.get("window").width, //for full screen
    // height: Dimensions.get("window").height, //for full screen
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    // marginTop: 20,
    marginBottom: 33,
    color: "black",
    fontSize: 30,
    fontStyle: "italic",
    backgroundColor: "red",
    borderRadius: 20,
    borderWidth: 4,
    padding: 5,
    overflow: "hidden"
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 15,
    borderRadius: 10
  },
  titleText: {
    marginLeft: "5%",
    marginRight: "5%",
    textTransform: 'uppercase',
    fontWeight: "200",
    backgroundColor:'transparent',
    color: 'white',
    textAlign:'center',
    fontSize : 25,
    borderColor: "white",
    letterSpacing: 5,
  },
  buttonText: {
    marginLeft: "5%",
    marginRight: "5%",
    textTransform: 'uppercase',
    fontWeight: "200",
    backgroundColor:'transparent',
    color: 'white',
    textAlign:'center',
    fontSize : 33,
    borderColor: "white",
    letterSpacing: 5,
  },
  buttons : {
    minHeight: 30,
    minWidth: 100,
    paddingTop:5,
    paddingBottom:5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'transparent',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
  }
});
