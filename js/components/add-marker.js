import React, { useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

export default function AddMarker({ transition, addMarker, currentTrekk }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [markerImage, setMarkerImage] = useState("");

  const [error, setError] = useState("");

  const validate = () => {
    markerImage ? null : setError("Please enter a marker image.");
    markerImage
      ? addMarker(markerImage, description, image, video, currentTrekk)
      : null;
  };

  return (
    <View style={localStyles.outer}>
      <ImageBackground
        source={require("../res/northern-lights.jpg")}
        style={localStyles.background}
      />

      <KeyboardAvoidingView
        style={{ flexDirection: "row", alignItems: "center" }}
        behavior="padding"
        enabled
      >
        <ScrollView contentContainerStyle={localStyles.inner}>
          <Image
            style={{ width: 325, height: 50, marginTop: "15%", marginBottom: "10%" }}
            source={require("../res/addMarker.png")}
          />

          <Text style={localStyles.text}>Marker Image:</Text>

          <TextInput
            placeholder="URL"
            placeholderTextColor="rgba(255,255,255,0.8)"
            onChangeText={n => {
              setMarkerImage(n);
            }}
            style={[localStyles.text, {minWidth: 250}]}
            onFocus={() => setError("")}
          />

          {error ? (
            <TouchableOpacity style={localStyles.errorBox}>
              <Text style={localStyles.errorText}>{error}</Text>
            </TouchableOpacity>
          ) : null}

          <Text style={localStyles.text}>Spawned Description:</Text>

          <TextInput
            placeholder="Text"
            placeholderTextColor="rgba(255,255,255, 0.5)"
            onChangeText={n => {
              setDescription(n);
            }}
            style={[localStyles.text, {minWidth: 250}]}
          />

          <Text style={localStyles.text}>Spawned Image:</Text>

          <TextInput
            placeholder="URL"
            placeholderTextColor="rgba(255,255,255, 0.5)"
            onChangeText={n => {
              setImage(n);
            }}
            style={[localStyles.text, {minWidth: 250}]}
          />

          <Text style={localStyles.text}>Spawned Video:</Text>

          <TextInput
            placeholder="URL"
            placeholderTextColor="rgba(255,255,255, 0.5)"
            onChangeText={n => {
              setVideo(n);
            }}
            style={[localStyles.text, {minWidth: 250}]}
          />
          <View style={localStyles.buttonsContainer}>

            <TouchableOpacity
              onPress={() => validate()}
              style={localStyles.buttons}
            >
              <Text style={localStyles.buttonText}>Add Marker</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => transition("CREATE_EDIT", true)}
              style={[localStyles.buttons, {maxWidth: 125, marginTop: 5}]}
            >
              <Text style={[localStyles.buttonText, {fontSize: 25}]}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    marginLeft: "5%",
    marginRight: "5%",
    textTransform: "uppercase",
    fontWeight: "200",
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    fontSize: 25,
    borderColor: "white",
    letterSpacing: 5
  },
  titleText: {
    color: "cyan",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 80,
    marginBottom: 30,
    marginTop: 80,
    alignItems: "center"
  },
  buttonText: {
    marginLeft: "5%",
    marginRight: "5%",
    textTransform: "uppercase",
    fontWeight: "200",
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    fontSize: 33,
    borderColor: "white",
    letterSpacing: 5
  },
  buttons: {
    minHeight: 30,
    minWidth: 50,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white"
  },

  buttonsContainer: {
    marginTop: "10%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center'
  },
  errorBox: {
    position: "absolute",
    bottom: "2%",
    padding: 10,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    opacity: 0.8,
    borderRadius: 20
  },
  errorText: {
    color: "black",
    fontStyle: "italic",
    fontSize: 16
  }
});
