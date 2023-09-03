import RenderExerciseButton from "./RenderExerciseButtons";

const { View, Text, StyleSheet } = require("react-native")


const WorkoutContainer = ({navigation, muscleGroup, exerciseList}) =>{
    console.log(muscleGroup);
    console.log(exerciseList);
    return (
        <View>
            <Text style={Styles.text}> {muscleGroup}</Text>

            <RenderExerciseButton navigation={navigation} exerciseList={exerciseList}/>
        </View>
    )
}
export default WorkoutContainer;

const Styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',

    },


})