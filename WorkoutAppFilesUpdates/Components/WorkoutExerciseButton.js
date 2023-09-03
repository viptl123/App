import { TouchableOpacity } from "react-native-gesture-handler";
import { Exercise } from "./Objects/Exercise";
import Routes from "../Navigation/Routes";
const { View, Text, StyleSheet } = require("react-native")

const WorkoutExerciseButton = ({navigation, exercise}) =>{

    const goToExerciseDisplay = () =>{
        navigation.navigate(Routes.ExerciseDisplay, {thisExercise: exercise});
    }
    return (
        <View style={Styles.container} >
           <TouchableOpacity 
           style={Styles.button}
           onPress={goToExerciseDisplay}>
                <Text style={Styles.text}>{exercise}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default WorkoutExerciseButton;

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#ff8e72",
        borderRadius: 10,
        marginTop: 5,
        borderRadius: 10,
        borderWidth: 2,
        width: 100,
        fontSize: 20,
        height: 50,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',

    },


})