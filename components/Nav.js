import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default class Nav extends Component {
  render() {
    return (
      <View style={styles.homeNavSection}>
        <View style={styles.homeNavAreas}>
          <Text style={styles.homeNavTitle}>I</Text>
        </View>
        <View style={styles.homeNavAreas}>
          <FontAwesome name="heart" size={48} color="red" />
        </View>
        <View style={styles.homeNavAreas}>
          <Text style={styles.homeNavTitle}>Math</Text>
        </View>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeNavSection:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  homeNavTitle:{
    fontSize:24,
    fontWeight:"bold",
    color:"green"
  },
  homeNavAreas:{
    flex: 1,
    alignItems:"center"
  }
});
