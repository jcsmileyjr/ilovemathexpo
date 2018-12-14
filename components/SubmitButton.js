import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class SubmitButton extends Component{
  render(){
    return(
      <TouchableOpacity 
        style={styles.submitButtonSection}
        onPress={()=> {this.props.add()}}>
        <Text style={styles.buttonStyle}>Submit</Text>
      </TouchableOpacity>
    );
  }
}

//tip for button styling @ codeburst.io/a-tale-of-three-buttons-exploring-react-native-styling-fa931159ef69

const styles= StyleSheet.create({
  submitButtonSection:{
    flex:2,
    alignItems:"center"
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
  }
    
});