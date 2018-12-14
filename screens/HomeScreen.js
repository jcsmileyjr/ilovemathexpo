import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import MathHeader from "../components/MathHeader.js";
import Nav from "../components/Nav.js";

export default class Home extends Component {
  static navigationOptions ={
    headerTitle: <Nav />,  
  }    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeHeader}>CHOOSE</Text> 
      <TouchableOpacity 
        style={styles.submitButtonSection}
        onPress={() => this.props.navigation.navigate('Addition')} >
        <Text style={styles.buttonStyle}>Addition</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.submitButtonSection}
        onPress={() => this.props.navigation.navigate('Subtraction')} >
        <Text style={styles.buttonStyle}>Subtraction</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.submitButtonSection}
        onPress={() => this.props.navigation.navigate('Multiply')} >
        <Text style={styles.buttonStyle}>Multiply</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.submitButtonSection}
        onPress={() => this.props.navigation.navigate('Division')} >
        <Text style={styles.buttonStyle}>Division</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  submitButtonSection:{
    flex:2,
    alignItems:"center",
    marginTop:20
  },    
  buttonStyle:{
    backgroundColor:"green",
    borderColor:"#ccc",
    borderWidth:1,
    borderRadius:30,
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    padding:12,
    textAlign:"center",
    overflow:"hidden",
    width:"50%",
    elevation: 1
  },
  homeHeader:{
    marginTop:10,
    marginBottom:20,
    textAlign:"center",
    fontSize:18,
    textDecorationLine:"underline"      
  }
  
});

