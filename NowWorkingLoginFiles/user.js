import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




const createAppUser =(email, firstName, lastName) =>{
    firestore()
        .collection('AppUser')
        .doc(email)
        .set({
            firstName: firstName,
            lastName: lastName,
        })  
}

export async function createUser (email, password, firstName, lastName) {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
        createAppUser(email, firstName, lastName)
        console.log('User account created & signed in!');
         
    })
    .catch((error) => {

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

export const loginUser = async(email, password) => {
    try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken();
    
        return {
            token
        }
    }
    catch (error){
        console.log(error);
    }
    
}
export const logOutUser=() =>{
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}




