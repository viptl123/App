import React from 'react';
import {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import  {setIsSignedIn, handleSignUp, email, setEmail, password, setPassword} from './LoginScreen';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import SignOutButton from '../Components/SignOutButton';
import { authentication } from '../firebase';




const Register = ({navigation}) => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(authentication, email,password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true);
            this.goToHomeScreen;
        })
        .catch(re => alert(re.message))
    }
    const goToHomeScreen =() => {
        navigation.navigate('Home');
    }
    return (

       <View>
            <Text> Sign Up For FitApp</Text>
            <TextInput placeholder="Email"
            value ={email}
            onChangeText ={text => setEmail(text)} 
            style ={styles.input}
            > 
            </TextInput>
            <TextInput placeholder="Password"
            value ={password}
            // text is a variable that takes whatevers inputed so we can do something with it
            onChangeText ={text => setPassword(text)} 
            style ={styles.input}
            secureTextEntry
            > 
            </TextInput>

            <TouchableOpacity
            style ={styles.button}
            onPress ={handleSignUp}
            >
                    <Text> Register</Text>
            </TouchableOpacity>
        
        </View>
    );
}
export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 500,
        backgroundColor: '#0782F9',
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