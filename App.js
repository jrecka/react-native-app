import React, {Component} from 'react';
import { StyleSheet, Text, View, FlashList } from 'react-native';
import {Constans} from 'expo';
export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Jola are you there?</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph:{
    fontSize: 20

  }
});
