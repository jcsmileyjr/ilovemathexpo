import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

class MathHeader extends Component{
  render(){
    return(
      <View style={styles.homeHeaderSection}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

class Equation extends Component{
  render(){
    return(
      <View style={styles.homeEquationSection}>
        <Text style={styles.centerText}>{this.props.a}</Text>
        <View style={styles.EquationMiddleLine}>
          <View style={styles.equationOperater}><Text>{this.props.operator}</Text></View>
          <View style={styles.equationBottomNumber}><Text>{this.props.b}</Text></View>  
        </View>
        <View style={styles.centerTextInput}>
          <TextInput style={styles.equationInput} />
        </View>
      </View>
    );  
  }
}

class Footer extends Component{
  render(){
    let score = (this.props.currentQuestion/10)* 100;
    return(
     <View style={styles.homeFooterSection}>
      <View>
        <Text>{this.props.currentQuestion}/10</Text>
      </View>
      <View>
        <Text>{score}%</Text>    
      </View>    
    </View>    
    );
  }
}

export default class ILoveMathMainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeNavSection}>
          <View><Text>Home</Text></View>
          <View style={[styles.homeNavTitle, styles.centerText]}><Text>I Love Math</Text></View>
          <View><Text>Restart</Text></View>          
        </View>
        <MathHeader title="Subtraction"/> 
        <Equation operator="-" a="1" b="1" />
        <View style={styles.homeSubmitSection}><Text>Submit</Text></View>        
        <Footer currentQuestion="3"/>       
      </View>
    );
  }
}

const onPress = (data) => {console.log(data)};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeNavSection: {
    flex:1,
    flexDirection: "row",
    backgroundColor: "#e7e7e7",
    borderBottomWidth:1,
    borderStyle: "solid",
    borderColor: "black"    
  },
  homeNavTitle:{
    flex: 1,
    color: "green"
  },
  homeHeaderSection:{      
   flex: 1,
   textAlign:"center",
   marginTop:10,
   marginBottom:20,
   textDecorationLine:"underline"
  },
  homeEquationSection:{   
   flex: 5,
   fontSize:32,
   fontWeight:"bold"
  },
  homeSubmitSection:{
   flex: 5,
   borderWidth:1,
   margin:50,
   borderRadius:30,
   borderStyle:"solid",
   borderColor:"green",
   backgroundColor:"green",
   color: "white",
   fontWeight:"bold",
   //boxShadow:"1px 1px 1px 1px #ccc",
   //use shadowColor, shadowOffset, Opacity, Radius
   justifyContent:"center",
   alignItems:"center"
  },  
  homeFooterSection:{
   flex: 1,
   flexDirection: "row",
   justifyContent:"space-around",
   alignItems:"center",
    backgroundColor: "#e7e7e7"    
  },
  centerText:{
    textAlign: "center"
  },
  EquationMiddleLine:{
    flexDirection:"row",
    alignContent:"center", 
    justifyContent:"space-between"
  },
  equationOperater:{
    flex: 1,
    alignItems:"center"
  },
  equationBottomNumber:{
    flex: 1.05 
  },
  equationInput:{
    borderWidth: 1,
    borderStyle:"solid",
    borderColor:"black",
    width:70,
    textAlign:"center"
  },
  centerTextInput:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  }
  
});


