import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Expo from "expo";
export default class App extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Super UPI</Text>
        <Button style={styles.buttonText}
          onPress={this.handleClick}
          title="Add Payee"
          color="#841584"
          accessibilityLabel="Add Payee details"
        />
        <Text style={styles.mainText}>You have not added any Payment Method yet!!</Text>
        <Text style={styles.footerStyle}>Super Api is created by Billexo Technologies Pvt. Limited</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#554971',
    paddingTop: Expo.Constants.statusBarHeight,
    alignItems: 'center'
  },
  mainText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  footerStyle : {
  position: 'absolute',
  color: 'white',
  bottom: 0,
  }
});