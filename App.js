import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Appbar from "./components/appBar/Appbar.js";
import CreateAccount from "./components/createAccount/index.js";
import LoginForm from "./components/form/Form.js";
import LoginView from "./components/login/index.js";

export default function App() {
  const [login, setLogin] = useState(true);

  const Change = () => {
    setLogin(!login);
  };

  if(login){

    return <LoginView change={Change}/>;
  }else{
    
    return <CreateAccount  change={Change}/>;
  }
}

const styles = StyleSheet.create({});
