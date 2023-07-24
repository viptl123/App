/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './Screens/Login';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './Navigation/Routes';
import Register from './Screens/Register';
import Home from './Screens/Home';


const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    // Clean up the listener on unmount
    return unsubscribe;
  }, [initializing]);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={Routes.Login}>
            <Stack.Screen name={Routes.Login} component={Login}/>
            <Stack.Screen name={Routes.Register} component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.Home} component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;