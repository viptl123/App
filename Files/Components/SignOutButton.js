import {isSignedIn, setIsSignedIn} from '../Pages/LoginScreen';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { authentication } from '../firebase';
import {createUserWithEmailAndPassword, getAuth,signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {navigation} from '../Pages/HomeScreen';

const signOutButton =() => {

    const signOutUser = () => {
        signOut(authentication)
        .then ((re) => {
            setIsSignedIn(false);
            navigation.navigate('Login');
        })
        .catch(re => alert(re.message))
    }
    return(
        <TouchableOpacity 
        style ={styles.button} 
        onPress ={signOutUser}>
            <Text>Sign Out</Text>
        </TouchableOpacity>
        

    );
}
export default signOutButton;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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