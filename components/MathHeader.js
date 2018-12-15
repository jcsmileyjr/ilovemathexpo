import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MathHeader extends Component{
  render(){
    return(
      <View style={styles.homeHeaderSection}>
      
        <Text>{this.props.currentQuestion + 0}/10</Text>
              
        <Text style={styles.homeHeaderText}>{this.props.title}</Text>
        
        {this.props.currentCorrect===0 ?(
        <Text>0%</Text>    
        ):(
        <Text>{Math.ceil((this.props.currentCorrect/this.props.currentQuestion)* 100)}%</Text>    
        )}
      </View>
    );
  }
}

const styles= StyleSheet.create({
  homeHeaderText:{
   fontSize:18,
   textDecorationLine:"underline"
  },
  homeHeaderSection:{
   flex: 1,
   flexDirection: "row",
   justifyContent:"space-around",
   alignItems:"center",
   marginTop:5,
   marginBottom:20  
  }    
    
});