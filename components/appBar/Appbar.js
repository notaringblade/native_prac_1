import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Appbar() {
  return (
    <View style={styles.barView}>
      <Text style={styles.logoText}>T E S L A</Text>
      <Text style={styles.langText}>en-US</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  langText:{
    marginTop: 7,
    fontSize: 14
  },
  barView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
})