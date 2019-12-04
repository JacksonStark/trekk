import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Clipboard,
  Alert,
  Image
} from "react-native";
//  import SwipeableViews from 'react-swipeable-views-native';
import SwipeableViews from "react-swipeable-views-native/lib/SwipeableViews.scroll";

export default function Dashboard({
  userTrekks,
  switchTrekk,
  addTrekk,
  deleteTrekk,
  logout
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const printToClipboard = function(access_code) {
    Clipboard.setString(access_code);
    Alert.alert("Access Code copied to clipboard");
  };

  const randomizeColour = function(name) {
    return `hsl(${name.length * 20}, 50%, 80%)`;
  };

  trekks = userTrekks.map(trekk => {
    return (
      <SwipeableViews>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={[localStyles.buttonText, { color: randomizeColour(trekk.name) }]}
            onPress={() => switchTrekk(trekk, "AR_SCENE")}
          >
            {trekk.name}
          </Text>
        </View>

        <View style={localStyles.swipe_items}>
          {/* <Text style={[localStyles.text, {backgroundColor: "rgb(46,134,193)"}]}>{trekk.access_code}</Text> */}
          <Text
            style={[localStyles.text, { backgroundColor: "#52a6bf", color: "black", borderColor: "black" }]}
            onPress={() => printToClipboard(trekk.access_code)}
          >
            Access Code
          </Text>
          <Text
            style={[localStyles.text, { backgroundColor: "#bfa952", color: "black", borderColor: "black" }]}
            onPress={() => switchTrekk(trekk, "CREATE_EDIT")}
          >
            Edit
          </Text>
          <Text
            style={[localStyles.text, { backgroundColor: "#bf5252", color: "black", borderColor: "black" }]}
            onPress={() => deleteTrekk(trekk.id)}
          >
            Delete
          </Text>
        </View>
      </SwipeableViews>
    );
  });

  return (
    <View style={localStyles.outer}>
      <ImageBackground
        source={require("../res/northern-lights.jpg")}
        style={localStyles.background}
      />

      <KeyboardAvoidingView
        behavior="padding"
        style={{ flexDirection: "row", alignItems: "center" }}
        enabled
      >
        <ScrollView contentContainerStyle={localStyles.inner}>
          <View style={localStyles.totalContainer}>
            <Image
              style={{ width: 325, height: 60, marginBottom: "5%" }}
              source={require("../res/myTrekksLogo.png")}
            />

            {trekks}

            <View
              style={{
                width: 275,
                minHeight: 135,
                maxHeight: 135, 
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 10,
                margin: 10
              }}
            >
              <SwipeableViews>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    style={{ width: 250, height: 70, marginHorizontal: 5}}
                    source={require("../res/newTrekkLogo2.png")}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <TextInput
                    placeholder="Name of Trekk"
                    onChangeText={name => {
                      setName(name);
                    }}
                    value={name}
                    placeholderTextColor="rgba(255,255,255, 0.5)"
                    style={[
                      localStyles.text,
                      {
                        textAlign: "center",
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderRadius: 0,
                        width: 250
                      }
                    ]}
                  />

                  <TouchableOpacity
                    onPress={() => addTrekk(name)}
                    style={localStyles.button2}
                  >
                    <Text style={[localStyles.buttonText, { fontSize: 25 }]}>
                      Create
                    </Text>
                  </TouchableOpacity>
                </View>
              </SwipeableViews>
            </View>

            <TouchableOpacity
              onPress={() => logout()}
              style={localStyles.button2}
            >
              <Text
                style={[
                  localStyles.buttonText,
                  { fontSize: 20, letterSpacing: 2 }
                ]}
              >
                Logout
              </Text>
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
    alignItems: "center"
  },
  totalContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: "10%",
    marginTop: "15%"
  },
  // swipe: {
  //   flex : 1,
  //   flexDirection: 'column',
  //   alignItems:'center',
  //   backgroundColor: "transparent",
  // },
  swipe_items: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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

  trekkHolder: {
    marginTop: "1%"
  },

  text: {
    marginTop: 10,
    color: "white",
    fontSize: 25,
    fontStyle: "italic",
    backgroundColor: "transparent",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
    overflow: "hidden"
  },
  titleText: {
    color: "cyan",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 80,
    marginBottom: 80,
    marginTop: 80,
    alignItems: "center"
  },
  buttonText: {
    marginLeft: "5%",
    marginRight: "5%",
    textTransform: "uppercase",
    fontWeight: "300",
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    fontSize: 33,
    borderColor: "white",
    letterSpacing: 5
  },
  button2: {
    minHeight: 30,
    minWidth: 100,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white"
  },
  buttons: {
    height: 40,
    width: 300,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "transparent"
  }
});
