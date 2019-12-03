import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Image
} from "react-native";
import axios from "axios";

export default function Login({ transition, switchUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const collector = {};

  collector["email"] = email;
  collector["password"] = password;

  console.log("EMAIL: ", email, "PASSWORD: ", password);

  const validate = () => {
    password ? null : setError("Please enter a password.");
    email ? null : setError("Please enter an email.");
    email && password ? checkUser() : null;
  };

  const checkUser = () => {
    setLoading(true);
    axios
      .get(
        `http://trekk.herokuapp.com/sessions/create?email=${email}&password=${password}`
      )
      .then(res => {
        setLoading(false);
        res.data.user_id
          ? switchUser(res.data.user_id)
          : setError("Your email or password is invalid");
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={localStyles.outer}>
      <ImageBackground
        source={require("../res/northern-lights.jpg")}
        style={localStyles.background}
      />

      <ScrollView contentContainerStyle={localStyles.inner}>
        {error ? (
          <TouchableOpacity style={localStyles.errorBox}>
            <Text style={localStyles.errorText}>{error}</Text>
          </TouchableOpacity>
        ) : null}
        <View style={localStyles.totalContainer}>
          <Image
            style={{ width: 250, height: 45 }}
            source={require("../res/loginLogo.png")}
          />

          <View style={localStyles.formContainer}>
            <TextInput
              placeholder="Enter your e-mail."
              onChangeText={email => {
                setEmail(email);
              }}
              value={email}
              placeholderTextColor="#d1d1d1"
              style={localStyles.textForm}
              onFocus={() => setError("")}
            />

            <TextInput
              placeholder="Enter your password."
              onChangeText={password => {
                setPassword(password);
              }}
              value={password}
              placeholderTextColor="#d1d1d1"
              style={localStyles.textForm}
              secureTextEntry={true}
              onFocus={() => setError("")}
            />

            {loading ? (
              <View style={{ marginTop: 30, height: 60, width: 120 }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => validate()}
                style={localStyles.button2}
              >
                <Text style={localStyles.buttonText}>ENTER</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={localStyles.buttonHolder}>
            <TouchableOpacity
              onPress={() => transition("LANDING_PAGE")}
              style={localStyles.button2}
            >
              <Text style={localStyles.buttonText}>BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  totalContainer: {
    marginBottom: "10%",
    marginTop: "30%",
    alignItems: "center"
  },

  formContainer: {
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "15%"
  },

  textForm: {
    paddingBottom: 15,
    marginBottom: 20,
    marginTop: 20,
    color: "white",
    fontSize: 25,
    width: 300,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginBottom: 10,
    letterSpacing: 1,
    fontStyle: 'italic'
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
  loading: {
    position: "absolute",
    width: "50%",
    bottom: "50%",
    top: "50%"
  },
  text: {
    marginTop: 20,
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
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
    fontWeight: "100",
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    fontSize: 33,
    borderColor: "white",
    letterSpacing: 5,
    fontWeight: "400"
  },

  buttonHolder: {
    top: "7%"
  },

  buttons: {
    height: 60,
    width: 120,
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 30,
    backgroundColor: "#01B0FF",
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "black"
  },
  button2: {
    height: 50,
    minWidth: 10,
    maxWidth: 200,
    paddingTop: 0,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white"
  }
});
