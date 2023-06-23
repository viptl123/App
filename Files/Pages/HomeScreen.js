import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {isSignedIn, signInUser,signOutUser,} from './LoginScreen';
import {} from 'react-native-gesture-handler';
import SignOutButton from '../Components/SignOutButton';
import WorkoutSelector from '../Components/WorkoutSelector';
import Workout from '../Components/Objects/Workout';


const HomeScreen = ({navigation}) => { 
    console.log("start");   
    let cardio = new Workout("Cardio");
    let pull = new Workout("Back and Bicep");
    let push = new Workout("Tricep Chest and Shoulders");
    let legs = new Workout("Legs");

    const workoutList = [cardio, pull, push, legs];
    const selectedWorkouts =[];

    const nextScreen = () => {
      navigation.navigate('WorkoutSelectScreen');
    }

    return (

        <View style ={styles.container}>
        
          <Text style = {styles.text}> Please Select your Workout Preferences</Text>
          <View style = {styles.firstRow}>
            <WorkoutSelector Workout={cardio}/> 
            <WorkoutSelector Workout={pull}/>
          </View>
          <View style ={styles.secondRow}>
            <WorkoutSelector  Workout={push}/>
            <WorkoutSelector Workout={legs}/>
          </View>

          <TouchableOpacity 
          onPress ={nextScreen}
          style ={styles.button}
          >
            <Text style ={styles.buttonText}>Next</Text>
          </TouchableOpacity>
    
        </View>
    );
    
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    backgroundColor: '#ffad33',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight:500,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  firstRow: {
    flexDirection: 'row',
  },
  secondRow: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#0782F9',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    
  },
  buttnText: {
    textAlign: 'center',

  }
});




