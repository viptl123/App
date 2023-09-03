const { View, Text, StyleSheet } = require("react-native")
import React from "react"
import RenderWorkoutPageComponents from "../Components/RenderWorkoutPageComponents";
import { ScrollView } from "react-native-gesture-handler";
import Video from 'react-native-video';

const WorkoutScreen = ({navigation, route}) =>{
    const { docId } = route.params;


    const data = 
    return (
        <ScrollView>
            <Text>Hello</Text>
            <Text>hekfnoife</Text>
            
            <RenderWorkoutPageComponents navigation={navigation} documentID={docId}/>

         
       
         
        </ScrollView>
        
    )
}

export default WorkoutScreen;

styles = StyleSheet.create({
    background: {
        width: 100,
        height: 200,
    }


})