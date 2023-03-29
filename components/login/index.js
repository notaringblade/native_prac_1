import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../form/Form';
import Appbar from '../appBar/Appbar';

export default function LoginView({change}) {
    return (
        <View style={styles.container}>
          <Appbar />
          <LoginForm change = {change}/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      }});