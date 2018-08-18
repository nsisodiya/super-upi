import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Expo from "expo";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Super UPI</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: Expo.Constants.statusBarHeight,
    alignItems: 'center'
  },
  mainText: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'pink'
  }
});
