import { View,Text, StyleSheet } from "react-native";
import exerciseMap from "../ActualObjects.js/Map/ExerciseMap";

const ExerciseDisplay = ({route})=>{
    const {thisExercise} = route.params;

    const exercise = exerciseMap.get(thisExercise);
    console.log(exercise);


    return (
        <View style={Styles.background}> 
            <View>
                <Text style={Styles.titleText}>{exercise.name} </Text>
            </View>
            <View>
                <Text style={Styles.descriptionText}>{exercise.description}</Text>
            </View>
        </View>
    )
}
export default ExerciseDisplay;

const Styles = StyleSheet.create({
    titleText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 20,
        fontSize: 35,

    },
    descriptionText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 20,



    },
    background: {
    }

})