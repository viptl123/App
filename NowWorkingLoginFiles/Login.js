import { useState, useContext } from 'react';
import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Routes from '../Navigation/Routes';
import { loginUser } from '../api/user';





const Login = ({navigation}) => {
    
    // variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    

    const goToRegisterScreen= () => {
        navigation.navigate(Routes.Register);
    }

    return (
        
        <KeyboardAvoidingView
        style = {styles.container}
        behavior ="padding" 
        >
        
        <Text style ={styles.header}> Welcome to FitApp</Text>
        <Text> Sign in</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email"
                 value ={email}
                // text is a variable that takes whatevers inputed so we can do something with it
                 onChangeText ={text => setEmail(text)} 
                style ={styles.input}
                > 
                </TextInput>
                <TextInput placeholder="Password"
                // value is the variable of whatever the user puts into the TextInput
                 value ={password}
                // text is a variable that takes whatevers inputed so we can do something with it
                 onChangeText ={text => setPassword(text)} 
                style ={styles.input}
                secureTextEntry
                > 
                </TextInput>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => loginUser(email, password)}
                style ={styles.button}
                >
                    <Text style ={styles.buttonText}>Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={goToRegisterScreen}
                style ={[styles.button, styles.buttonOutline]}
                >
                    <Text style ={styles.buttonOutlineText}>Register </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        
    )
}
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBD87F'
    },
    inputContainer: {
        width:'80%',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2.

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
    header: {
        fontSize: 27,
    }





});

