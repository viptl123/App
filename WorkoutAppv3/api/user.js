import auth from '@react-native-firebase/auth';
import Routes from '../Navigation/Routes';

export const createUser = async (email, password, navigation) => {
    auth()
    .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate(Routes.Home);
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
        navigation.navigate(Routes.Home);
        return {
            token
        }
    }
    catch (error){
        console.log(eror);
    }
}

