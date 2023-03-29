import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Appbar from "../appBar/Appbar";

export default function CreateAccount({ change }) {
  return (
    <View style={styles.container}>
      <Appbar />
      <View style={styles.formView}>
        <Text style={styles.signInText}>Create Account</Text>
        <View style={styles.inputView}>
          <Text style={styles.hintText}>Select Market</Text>
          <TextInput style={styles.input} />
          <Text style={styles.hintText}>Select Language</Text>
          <TextInput style={styles.input} />
          <Text style={styles.hintText}>First Name</Text>
          <TextInput style={styles.input} />
          <Text style={styles.hintText}>Last Name</Text>
          <TextInput style={styles.input} />
          <Text style={styles.hintText}>Email Address </Text>
          <TextInput style={styles.input} />

          <Text style={styles.hintText}>Password</Text>
          <TextInput style={styles.input} />
          <View
            style={{
              marginTop: 20,
              alignSelf: "center",
              backgroundColor: "blue",
              borderRadius: 20,
              padding: 10,
              width: 300,
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>CREATE ACCOUNT</Text>
          </View>

          <TouchableOpacity onPress={change}>
            <View
              style={{
                alignSelf: "center",
                marginTop: 60,
                borderWidth: 4,
                borderColor: "black",
                borderRadius: 20,
                padding: 10,
                width: 300,
              }}
            >
              <Text style={{ alignSelf: "center" }}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  formView: {
    paddingTop: 30,
  },
  signInText: {
    marginLeft: 30,
    fontSize: 30,
    fontWeight: "600",
  },
  inputView: {
    padding: 25,
  },
  hintText: {
    fontSize: 16,
    fontWeight: "400",
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  signinButton: {
    paddingTop: 20,
    borderRadius: 20,
  },
});
