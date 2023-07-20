import auth from '@react-native-firebase/auth';
import Routes from '../Navigation/Routes';
import firestore from '@react-native-firebase/firestore';


export const isLoggedIn = false;


const createAppUser =(email, firstName, lastName) =>{
    firestore()
        .collection('AppUser')
        .doc(email)
        .set({
            firstName: firstName,
            lastName: lastName,
        })  
}

export const createUser = async (email, password, firstName, lastName, navigation) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
        createAppUser(email, firstName, lastName)
        console.log('User account created & signed in!');
        isLoggedIn = true;
        
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }

        console.error(error);
    });
   
}

export const loginUser = async(email, password, navigation) => {
    try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken();
        isLoggedIn = true;
        return {
            token
        }
    }
    catch (error){
        console.log(error);
    }
    
}

