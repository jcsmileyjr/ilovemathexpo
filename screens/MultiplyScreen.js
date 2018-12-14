import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Nav from "../components/Nav.js";
import MathHeader from "../components/MathHeader.js";
import Equation from "../components/Equation.js";
import SubmitButton from "../components/SubmitButton.js";
import Footer from "../components/Footer.js";

export default class MultiplyScreen extends Component {
  static navigationOptions ={
    headerTitle: <Nav />,  
  }    
  render() {
    return (
      <View style={styles.container}>
        
        <MathHeader title="Multiplication" />
        <Equation operator="x" a="1" b="1" />
        <SubmitButton />
        <Footer currentQuestion="5"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  }
  
});

