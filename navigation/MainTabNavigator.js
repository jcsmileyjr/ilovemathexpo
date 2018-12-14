import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import SubtractionScreen from '../screens/SubtractionScreen';
import AdditionScreen from '../screens/AdditionScreen';
import MultiplyScreen from '../screens/MultiplyScreen';
import DivisionScreen from '../screens/DivisionScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SubtractionStack = createStackNavigator({
  Subtraction: SubtractionScreen,
});

SubtractionStack.navigationOptions = {
  tabBarLabel: 'Subtraction',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-remove${focused ? '' : '-outline'}`
          : 'md-remove'
      }
    />
  ),
};

const AdditionStack = createStackNavigator({
  Addition: AdditionScreen,
});

AdditionStack.navigationOptions = {
  tabBarLabel: 'Addition',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add${focused ? '' : '-outline'}`
          : 'md-add'
      }
    />
  ),
};

const MultiplyStack = createStackNavigator({
  Multiply: MultiplyScreen,
});

MultiplyStack.navigationOptions = {
  tabBarLabel: 'Multiply',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-close${focused ? '' : '-outline'}`
          : 'md-close'
      }
    />
  ),
};

const DivisionStack = createStackNavigator({
  Division: DivisionScreen,
});

DivisionStack.navigationOptions = {
  tabBarLabel: 'Division',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-resize${focused ? '' : '-outline'}`
          : 'md-resize'
      }
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  AdditionStack,
  MultiplyStack,
  SubtractionStack,
  DivisionStack,
});
