import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Footer extends Component{
  render(){
    return(
     <View style={styles.homeFooterSection}>
      <View>
        <Text>{this.props.currentQuestion}/10</Text>
      </View>
      <View>
        {this.props.currentCorrect===0 ?(
        <Text>0%</Text>    
        ):(
        <Text>{(this.props.currentCorrect/this.props.currentQuestion)* 100}%</Text>    
        )}
    
      </View>    
    </View>
    );
  }
}


const styles= StyleSheet.create({
  homeFooterSection:{
   flex: 1,
   flexDirection: "row",
   justifyContent:"space-around",
   alignItems:"center"  
  },
    
});