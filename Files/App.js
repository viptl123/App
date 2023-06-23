import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Pages/LoginScreen';
import 'react-native-gesture-handler';
import HomeScreen from './Pages/HomeScreen';
import Register from './Pages/Register';
import WorkoutSelectScreen from './Pages/WorkoutSelectScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App.js")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component ={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Register' component ={Register}/>
        <Stack.Screen name='WorkoutSelectScreen' component ={WorkoutSelectScreen}/>
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
