import { View, Text } from "react-native";
import ExerciseButton from "./ExerciseButton";
import { StyleSheet } from "react-native";
const ExercisePage = ({workoutArea, exerciseList}) => {

    return (
        <View >
            <View style={Styles.TextContainer}>
                <Text style={Styles.Text}>{workoutArea.name}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[0]}
                position={Styles.legsPosition}
                ></ExerciseButton>
            
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[1]}
                position={Styles.ShouldersPosition}
                >
                </ExerciseButton>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[2]}
                position={Styles.TricepPosition}
                >
                </ExerciseButton>
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[3]}
                position={Styles.ChestPositon}
                >
                </ExerciseButton>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[4]}
                position={Styles.BicepPositon}
                >
                </ExerciseButton>
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[5]}
                position={Styles.BackPosition}
                >
                </ExerciseButton>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <ExerciseButton
                workoutArea={workoutArea}
                exercise={exerciseList[6]}
                position={Styles.CardioPosition}
                >
                </ExerciseButton>
            </View>
        </View>

    );


}
export default ExercisePage;
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#b8d0eb',
        flex: 1,
    },
    TextContainer: {
        marginBottom: 20,
       marginTop: 20,
            
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

