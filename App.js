import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

// import Login from './src/pages/Login';
// import Signup from './src/pages/Signup';

import Routes from './src/Routes'
import Signup from './src/pages/Signup';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#455a64"
          barStyle="light-content"
        />

    
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607d8b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
