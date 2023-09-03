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
import MuscleGroups from './Screens/MuscleGroups';
import ExerciseGroups from './Screens/ExerciseGroups';
import WorkoutScreen from './Screens/WorkoutScreen';
import ExerciseDisplay from './Screens/ExerciseDisplay';
import CalendarScreen from './Screens/CalenderScreen';
import NameWorkoutScreen from './Screens/NameWorkoutScreen';


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
            <Stack.Screen name={Routes.MuscleGroups} component={MuscleGroups}/>
            <Stack.Screen name={"ExerciseGroups"} component={ExerciseGroups}
            />
            <Stack.Screen name={Routes.WorkoutScreen} component={WorkoutScreen}

            />
            <Stack.Screen name={Routes.ExerciseDisplay} component={ExerciseDisplay}/>
            <Stack.Screen name={Routes.CalenderScreen} component={CalendarScreen}/>
            <Stack.Screen name={Routes.NameWorkoutScreen} component={NameWorkoutScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;