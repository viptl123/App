import { TouchableOpacity } from "react-native-gesture-handler";
import Routes from "../Navigation/Routes";
import { useState } from "react";
const { View, Text, StyleSheet, TurboModuleRegistry } = require("react-native")
import { WorkoutArea } from "../Components/Objects/WorkoutArea";
import ExercisePage from "../Components/ExercisePage";
import { ShouldersList } from "../ActualObjects.js/Exercises/Shoulders";
import { tricepList } from "../ActualObjects.js/Exercises/Tricep";
import { LegList } from "../ActualObjects.js/Exercises/Legs";
import { ChestList } from "../ActualObjects.js/Exercises/Chest";
import { bicepList } from "../ActualObjects.js/Exercises/Bicep";
import { BackList } from "../ActualObjects.js/Exercises/Back";
import { CardioList } from "../ActualObjects.js/Exercises/Cardio";
import { ScrollView } from "react-native-gesture-handler";
import { uploadWorkout } from "../api/user";
import { Workout } from "../Components/Objects/Workout";
import { Alert } from "react-native";


const ExerciseGroups = ({navigation, route}) => {
    const {workout} = route.params;
    const exerciseList = [];

    shoulders = new WorkoutArea("Shoulders");
    legs = new WorkoutArea("Legs");
    triceps = new WorkoutArea("Tricep");
    bicep = new WorkoutArea("Bicep");
    chest = new WorkoutArea("Chest");
    back = new WorkoutArea("Back");
    cardio = new WorkoutArea("Cardio");
    if (workout.BodyParts.indexOf("Shoulders") !== -1 ){ 
        showShoulders = true;
        exerciseList.push(shoulders)
    }else {showShoulders = false;}
    if (workout.BodyParts.indexOf("Legs") !== -1){
        showLegs = true;
        exerciseList.push(legs)
   }else { showLegs = false;}
    if (workout.BodyParts.indexOf("Tricep") !== -1 ){ 
        showTriceps = true;
        exerciseList.push(triceps)
    }else {showTriceps = false;}
    if (workout.BodyParts.indexOf("Chest") !== -1 ){ 
        showChest = true;
        exerciseList.push(chest)
    }else {showChest = false;}
    if (workout.BodyParts.indexOf("Bicep") !== -1 ){ 
        showBicep = true;
        exerciseList.push(bicep)
    }else {showBicep = false;}
    if (workout.BodyParts.indexOf("Back") !== -1 ){ 
        showBack = true;
        exerciseList.push(back)
    }else {showBack = false;}
    if (workout.BodyParts.indexOf("Cardio") !== -1 ){ 
        showCardio = true;
        exerciseList.push(cardio)
    }else { showCardio = false;}

    




    const goToHomeScreen = () => {
        
        let finish = true;
        const finishList = [];

        if (showLegs === true && legs.exercises.length ===0){
            finish = false;
            finishList.push("Legs")
        }
        if (showShoulders === true && shoulders.exercises.length ===0){
            finish = false;
            finishList.push("Shoulders")
        }
        if (showTriceps === true && triceps.exercises.length ===0){
            finish = false;
            finishList.push("Triceps")
        }
        if (showChest === true && chest.exercises.length ===0){
            finish = false;
            finishList.push("Chest")
        }
        if (showBicep === true && bicep.exercises.length ===0){
            finish = false;
            finishList.push("Bicep")
        }
        if (showBack === true && back.exercises.length ===0){
            finish = false;
            finishList.push("Back")
        }
        if (showCardio === true && cardio.exercises.length ===0){
            finish = false;
            finishList.push("Cardio")
        }

        if (finish === false){
            let str = finishList[0] + " ";
            for (let i=1; i < finishList.length -1; i++){
                str += ", " + finishList[i];
            }
            if (finishList.length !== 1){
                str += finishList[finishList.length-1];
            }
            Alert.alert("Please select a workout for the following Muscle Groups,  " + str);
        }else{
            // uploadWorkout(workout.BodyParts, legs.exercises, shoulders.exercises, triceps.exercises, chest.exercises, bicep.exercises, back.exercises, cardio.exercises);
            
            navigation.navigate(Routes.NameWorkoutScreen, {
                BodyParts: workout.BodyParts,
                legs: legs.exercises,
                shoulders: shoulders.exercises,
                triceps: triceps.exercises,
                chest: chest.exercises,
                bicep: bicep.exercises,
                back: back.exercises,
                cardio: cardio.exercises,
            });
        }


    }


    return(
        <ScrollView
        style={Styles.background}>
            <Text style={Styles.Text}>Please select which workouts you would like for each muscle group</Text>
            {showLegs ?
                <ExercisePage
                workoutArea={legs}
                exerciseList={LegList}
                >
                </ExercisePage>
                : 
                <Text></Text>
            }
            
            {showShoulders ?
                <ExercisePage
                workoutArea={shoulders}
                exerciseList={ShouldersList}>
                </ExercisePage>
                :
                <Text></Text>
            }
            {showTriceps ?
                <ExercisePage
                workoutArea={triceps}
                exerciseList={tricepList}
                >
                </ExercisePage>
                : 
                <Text></Text>
            }
            {showChest ?
                <ExercisePage 
                workoutArea={chest}
                exerciseList={ChestList}
                >
                </ExercisePage>
                :
                <Text></Text>
            }
            {showBicep ?
                <ExercisePage
                workoutArea={bicep}
                exerciseList={bicepList}
                >
                </ExercisePage>
                :
                <Text></Text>
            }
            {showBack ?
                <ExercisePage
                workoutArea={back}
                exerciseList={BackList}
                >
                </ExercisePage>
                : 
                <Text></Text>
            }

            {showCardio ?
                <ExercisePage
                workoutArea={cardio}
                exerciseList={CardioList}
                >
                </ExercisePage>
                :
                <Text></Text>
            }


            <View style={Styles.buttonContainer}>
                <TouchableOpacity
                onPress={goToHomeScreen}
                style={Styles.nextButton}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );


    
}
export default ExerciseGroups;

const Styles = StyleSheet.create({
    background: {
        backgroundColor: '#EDD382',

    },
    nextButton: {
        backgroundColor: '#007AFF',
        width: 100,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
            
    },
    buttonContainer: {
        alignItems: 'center',

    },
    Text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }, 



})
