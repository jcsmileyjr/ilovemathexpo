import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default class Equation extends Component{
    
 
submit = (text) =>{
  this.props.calculate();
  this.textInput.clear(); //clear the textInput element
}    
  render(){
    return(
      <View style={styles.homeEquationSection}>
        <Text style={[styles.equationTopLine, styles.equationTextSize]}>{this.props.a}</Text>
        <View style={styles.EquationMiddleLine}>
          <View style={styles.equationOperater}>
            <Text style={styles.equationTextSize}>{this.props.operator}</Text>
          </View>
          <View style={styles.equationBottomNumber}>
            <Text style={styles.equationTextSize}>{this.props.b}</Text>
          </View>  
        </View>
        <View style={styles.lineUnderEquationSection}>
            <Text style={styles.lineUnderEquation}></Text>
        </View>
        <View style={styles.centerTextInput}>
          <TextInput 
            style={styles.equationInput}
            onChangeText={(text) => {this.props.getAnswer(text)}}  
            autoFocus= {true}
            ref={input => {this.textInput = input}}
            onSubmitEditing={() => {this.submit()}} />
        </View>
      </View>
    );  
  }
}

/*
onSubmitEditing={(text) => {this.props.getAnswer(text); this.textInput.clear()}}
*/

const styles = StyleSheet.create({
  homeEquationSection:{   
   flex: 5
  },
  equationTopLine:{
   textAlign:"center",
   fontSize:32       
  },
  EquationMiddleLine:{
   flexDirection:"row",
   alignItems:"center", 
   justifyContent:"space-between",
   //borderBottomWidth:1,
   //margin:50,
   //borderStyle:"solid",
   //borderColor:"black"
  },
  equationTextSize:{
   fontSize:32      
  },
  equationOperater:{
    flex: 1,
    alignItems:"center"
  },
  equationBottomNumber:{
    flex: 1.095 
  },
  equationInput:{
    borderWidth: 1,
    borderStyle:"solid",
    borderColor:"black",
    width:70,
    textAlign:"center",
    fontSize:32,
    backgroundColor:"gainsboro"
  },
  centerTextInput:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  },
  lineUnderEquationSection:{
    flex: 1/5,
    alignItems:"center",
    justifyContent:"center"
  },
  lineUnderEquation:{
    borderWidth:1,
    borderColor:"black",
    borderStyle:"solid",
    width:"60%",
    backgroundColor:"black"
  }
    
});