import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';

//I'm not sure how but I think this allows me to use the navigate functionality of react navigation. 
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Nav from "../components/Nav.js";
import MathHeader from "../components/MathHeader.js";
import Equation from "../components/Equation.js";
import SubmitButton from "../components/SubmitButton.js";
import Footer from "../components/Footer.js";

export default class MultiplyScreen extends Component {
    
  //set the mobile app header to the Nav component    
  static navigationOptions ={
    headerTitle: <Nav />,  
  }  

  constructor(props){
    super(props);
    this.state = {
      currentCount:0,   //number of questions have been answered
      correct:0,        //number of questions been answered correctly
      lineA:10,         //top number of the equation
      lineB:1,          //bottom number of the equation
      currentAnswer:0,   //current user inputted answer
      modalFinalScoreVisible:false,  //tip from react-native documentation
      modalCorrectAnswerVisible:false,
      modalInCorrectAnswerVisible:false
    }
  }

  //Method called in the equation and submitButton components to tally number of questions completed and get a new number for the top line of the equation. 
  updateCurrentCount = () => {
    
    //add one to the currentCount state
    let newCount = this.state.currentCount + 1;
      
    //update the currentCount state with the newCount variable and use a callback function to check if the game should end.  
    this.setState({currentCount:newCount}, () =>{
        this.endGame();
    })
      
    //create a new number to be displayed on the top line of the equation.  
    let newNumber = (Math.floor((Math.random() * 10) + 1)); 
      
    //get the old top line number
    let checkIfSameAsLast = this.state.lineA;
      
    //checks if the old top line number is the same as the new. If so, a new number is pull. This solves a user experience issue in that the same number is pull back to back multiple times.   
    if(newNumber === checkIfSameAsLast){
      newNumber = (Math.floor((Math.random() * 10) + 1));
    }
      
    //update the lineA state (top line of the equation)
    this.setState((state) => {
        return {lineA: newNumber}
    })
  }
  
  //Method called in the equation and submitButton components to check if the user inputted answer is correct. A correct or wrong message is communicated to the user.
  checkAnwser = () => {
    //current answer given by the user in the app's state. This is updated from the updateAnswer method used in the equation component.
    let answer = this.state.currentAnswer;
      
    //Formulate the correct answer expected from the user  
    let rightAnswer = this.state.lineA * this.state.lineB;
      
    //Check if the user enter answer matches the correct answer. A correct or incorrect analysis is communicated to the user. If the answer is correct, the correct state is updated by one. 
    if(answer == rightAnswer){
      this.setModalCorrectAnswerVisible(!this.state.modalCorrectAnswerVisible);
      this.setState((state) => {
        return {correct: state.correct + 1}
      })        
    }else{
      this.setModalInCorrectAnswerVisible(!this.state.modalInCorrectAnswerVisible);
    }  
      
  }
  
  //Method call in the updateCurrentcount method by the endGame function to display the final score. 
  showLastScore = () =>{
    this.setModalFinalScoreVisible(!this.state.modalFinalScoreVisible);
  }
  
  //Method call in the updateCurrentCount method to end the game, show the last score, and reset the the state. 
  endGame = () =>{
    if(this.state.currentCount >= 10){
        
      //method call to display the final score    
      this.showLastScore();
    }      
  }
  
  //method called when the user close the Final Score modal when the quiz ends. This reset the game state and navigate the user to the home screen.
  resetState = () =>{
      
      this.setModalFinalScoreVisible(!this.state.modalFinalScoreVisible);
      
      //navigate the user to the Home screen
      this.props.navigation.navigate("Home");
        
      //reset the state to 0
      this.setState((state) => {
        return {currentCount: 0}
      })
        
      //reset the state to 0
      this.setState((state) => {
        return {correct: 0}
      })       
  }


  //method use in the equation and submitbutton component to check if the user answer is correct and update the currentCount state.
  clickSubmit = () => {
    this.checkAnwser();      
    this.updateCurrentCount();
  }
  
  //method in the equation component to use the user inputted answer to update the currentAnswer state
  updateAnswer = (text) => {
    
    this.setState((state) => {
        return {currentAnswer: text}
    })
  }
  
  //tips from react native documentation
  //method to open/close final score modal
  setModalFinalScoreVisible(visible){
    this.setState({modalFinalScoreVisible: visible});
  }

  //method to open/close correct answer modal
  setModalCorrectAnswerVisible(visible){
    this.setState({modalCorrectAnswerVisible: visible});
  }

  //method to open/close incorrect answer modal
  setModalInCorrectAnswerVisible(visible){
    this.setState({modalInCorrectAnswerVisible: visible});
  }

  render() {
    let finalScore = Math.ceil((this.state.correct/this.state.currentCount)* 100);
    return (
      <View style={styles.container}>        
        <MathHeader title="Multiplication" 
          currentQuestion={this.state.currentCount} 
          currentCorrect= {this.state.correct}  />
        <Equation operator="x" 
          a={this.state.lineA} 
          b={this.state.lineB}
          calculate={this.clickSubmit}
          getAnswer={this.updateAnswer} />
        <SubmitButton 
          calculate={this.clickSubmit}  />
        <Modal
          animationType ="slide"
          transparent={false}
          visible={this.state.modalFinalScoreVisible}
          onRequestClose ={() => {this.resetState()}} >
          <View style={styles.modalContainer}>
            <Text style={styles.finalScoreSection}>
              Final score: {finalScore}%
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress= {() => {this.resetState()}}>
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>            
          </View>
        </Modal>
        <Modal
          animationType ="slide"
          transparent={false}
          visible={this.state.modalCorrectAnswerVisible}
          onRequestClose ={() => {this.setModalCorrectAnswerVisible(!this.state.modalCorrectAnswerVisible);}} >
          <View style={styles.modalContainer}>
            <Text style={styles.finalScoreSection}>
              Correct
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress= {() => {this.setModalCorrectAnswerVisible(!this.state.modalCorrectAnswerVisible);}}>
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>            
          </View>
        </Modal>
        <Modal
          animationType ="slide"
          transparent={false}
          visible={this.state.modalInCorrectAnswerVisible}
          onRequestClose ={() => {this.setModalInCorrectAnswerVisible(!this.state.modalInCorrectAnswerVisible);}} >
          <View style={styles.modalContainer}>
            <Text style={styles.finalScoreSection}>
              Wrong
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress= {() => {this.setModalInCorrectAnswerVisible(!this.state.modalInCorrectAnswerVisible);}}>
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>            
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  modalContainer:{
    flex: 1,
    backgroundColor: "white",
    justifyContent:"space-around",
    alignItems:"center",
    fontSize:32
  },
  buttonStyle:{
    backgroundColor:"green",
    borderColor:"#ccc",
    borderWidth:1,
    borderRadius:30,
    color:"white",
    fontSize:32,
    fontWeight:"bold",
    padding:12,
    textAlign:"center",
    overflow:"hidden",
    width:"50%",
    elevation: 1
  },
  finalScoreSection:{
    fontSize:32      
  },
  modalButtonText:{
    fontSize:32,
    color:"white"
  }
  
});
