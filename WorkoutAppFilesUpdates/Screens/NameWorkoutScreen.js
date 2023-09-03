import { useState } from "react";
import { View,TouchableOpacity, KeyboardAvoidingView,StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { uploadWorkout } from "../api/user";
import { Alert } from "react-native";


const NameWorkoutScreen = ({navigation, route}) =>{
    const [name,setName] = useState('');
    const { BodyParts, legs, shoulders, triceps, chest, bicep, back, cardio  } = route.params;
    const finishWorkout = () =>{
        if (name === ""){
            Alert.alert("Please enter a name for this workout");
        }
        else {
            
            uploadWorkout(name, BodyParts, legs, shoulders, triceps, chest, bicep, back, cardio);
            navigation.navigate(Routes.Home);
        }
    }
    return (
        
        <KeyboardAvoidingView
        style = {styles.container}
        behavior ="padding" 
        >
        <TouchableOpacity>
        </TouchableOpacity>
        <Text style ={styles.header}> Please Enter a Name for this Workout</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Name"
                 value ={name}
                // text is a variable that takes whatevers inputed so we can do something with it
                 onChangeText ={text => setName(text)} 
                style ={styles.input}
                > 
                </TextInput>
            </View>

                <TouchableOpacity
                onPress={finishWorkout}
                style ={[styles.button, styles.buttonOutline]}
                >
                    <Text style ={styles.buttonOutlineText}>Finish </Text>
                </TouchableOpacity>
            
            </KeyboardAvoidingView>
        
    )
}
export default NameWorkoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBD87F',
        textAlign: 'center',
    },
    inputContainer: {
        width:'60%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 150,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 27,
    },
   
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
        width: 150,
        justifyContent:'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    },
    buttonOutlineText: {
        
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },





});