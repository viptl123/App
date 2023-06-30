import {Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useState} from 'react';
import { createUser } from '../api/user';
const Register = ({navigation}) =>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    return (

        <View style ={styles.container}>
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
             onPress ={async () => await createUser(email, password, navigation)}
             >
                     <Text style={styles.text}> Register</Text>
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
        
        height: 500,
        //backgroundColor: '#03E4C6',
        backgroundColor: '#f4f1bb',
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
        width: 200
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#ffd289',
        width: 100,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
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
    },
    
});