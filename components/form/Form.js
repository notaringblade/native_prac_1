import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function LoginForm({change}) {
  return (
    <View style={styles.formView}>
      <Text style={styles.signInText}>Sign In</Text>
      <View style={styles.inputView}>
        <Text style={styles.hintText}>Email Address (i)</Text>
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
          <Text style={{ alignSelf: "center", color: "white" }}>SIGN IN</Text>
        </View>

        <View style={{ marginLeft: 40, paddingTop: 20 }}>
          <Text style={styles.hintText}>Forgot email? | Forgot password?</Text>
        </View>

        <View style={{ marginLeft: 40, paddingTop: 60 }}>
          <Text style={{ alignSelf: "center", marginRight: 45, fontSize: 20 }}>
            --------------OR--------------
          </Text>
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
            <Text style={{ alignSelf: "center" }}>CREATE ACCOUNT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
