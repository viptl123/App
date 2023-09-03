import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import WorkoutButton from "../Components/WorkoutButton";
import { useState } from "react";
import { Workout } from "../Components/Objects/Workout";
import Routes from "../Navigation/Routes";
import ExerciseGroups from "./ExerciseGroups";


const MuscleGroups = ({ navigation }) => {
    const [myWorkout, setMyWorkout] = useState(new Workout());
  
    const goToNextScreen = () => {
        if (myWorkout.BodyParts.length === 0){
            Alert.alert("Please Select at Least One Muscle Group");
        }else {
            navigation.navigate(Routes.ExerciseGroups, {workout: myWorkout});
        }
        
    }
    
    return (
      <View style={Styles.container}>
        <View style={Styles.TextContainer}>
            <Text style={Styles.Text}> Please Select Which Muscle Groups You would Like in this Workout</Text>
        </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <WorkoutButton workout={myWorkout} 
                workoutName="Legs"
                position={Styles.legsPosition}
                />
                <WorkoutButton workout={myWorkout} 
                workoutName="Shoulders"
                position={Styles.ShouldersPosition}
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <WorkoutButton workout={myWorkout} 
                workoutName="Tricep"
                position={Styles.TricepPosition}
                />
                <WorkoutButton workout={myWorkout} 
                workoutName="Chest"
                position={Styles.ChestPositon}
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <WorkoutButton workout={myWorkout} 
                workoutName="Bicep"
                position={Styles.BicepPositon}
                />
                <WorkoutButton workout={myWorkout} 
                workoutName="Back"
                position={Styles.BackPosition}
                />
            </View>

                <WorkoutButton workout={myWorkout} 
                workoutName="Cardio"
                position={Styles.CardioPosition}
                /> 
            <View style ={Styles.ButtonContainer}>
                <TouchableOpacity 
                style ={Styles.nextButton}
                onPress={goToNextScreen}>
                    <Text style ={Styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  };
  
  export default MuscleGroups;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#b8d0eb',
        flex: 1,
    },
    TextContainer: {
        marginBottom: 50,
        marginTop: 40,
        
    },
    Text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }, 
    legsPosition: {
        marginRight: 20,
        marginTop: 10,
        

    },
    ShouldersPosition: {
        marginRight: 20,
        marginTop: 10,
    },
    TricepPosition: {
        marginRight: 20,
        marginTop: 10,
    },
    ChestPositon: {
        marginRight: 20,
        marginTop: 10,
    },
    BicepPositon: {
        marginRight: 20,
        marginTop: 10,
    },
    BackPosition: {
        marginRight: 20,
        marginTop: 10,
    },
    CardioPosition: {
        marginRight: 20,
        marginTop: 10,
       alignItems: 'center'
    },
    nextButton: {
        backgroundColor: '#ffd289',
        width: 100,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    nextButtonText: {
        fontWeight: 'bold',
    },
    ButtonContainer: {
        alignItems: 'center'
    },

})