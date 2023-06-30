/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import Home from './Screens/Register';
import { View, ViewBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Navigation/MainNavigation';



const App = () => {
  return ( 
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
};
export default App;