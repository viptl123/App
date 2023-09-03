import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




const createAppUser =(email, firstName, lastName) =>{
    let WOID = [];
    firestore()
        .collection('AppUser')
        .doc(email)
        .set({
            firstName: firstName,
            lastName: lastName,
            numberWorkouts: 0,
            workoutIds: WOID,

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

export const uploadWorkout = async (name, workoutParts, Legs, Shoulders, triceps, chest, bicep, back, cardio) => {
    const user = auth().currentUser;
    const email = user.email;
    const str2 = email.charAt(0).toUpperCase() + email.slice(1);
  
    // Fetch the user document data
    const documentSnapshot = await firestore().collection('AppUser').doc(str2).get();
    const userDocumentData = documentSnapshot.data();
    console.log(email);
    if (!userDocumentData) {
      // The document doesn't exist, handle the error or initialize the userDocumentData with default values
      console.log('User document not found!');
      return;
    }
  
    console.log(userDocumentData);
  
    // Get the current value of numberWorkouts
    const numWorkout = userDocumentData.numberWorkouts + 1;
  
    // the new document id for the new workout
    const docId = email + numWorkout;
  
    // Add the new docId to workoutIds
    const workoutIds = userDocumentData.workoutIds;
    workoutIds.push(docId);
    // Update the AppUser document with the new data
    await firestore().collection('AppUser').doc(str2).set({
      firstName: userDocumentData.firstName,
      lastName: userDocumentData.lastName,
      numberWorkouts: numWorkout, // Update numberWorkouts to the new value
      workoutIds: workoutIds, // Use the updated workoutIds array
    });
    
  
    // Store the workout arrays in the Workouts collection
    await firestore().collection('Workouts').doc(docId).set({
      muscleGroups: workoutParts,
      Legs: Legs,
      Shoulders: Shoulders,
      Tricep: triceps,
      Chest: chest,
      Bicep: bicep,
      Back: back,
      Cardio: cardio,
      name: name,
    });
  
    // Now you have successfully updated numberWorkouts in the Firestore document
  };
  
  

export async function getWorkoutData (){
    const user = auth().currentUser;
    const email = user.email;
    const str2 = email.charAt(0).toUpperCase() + email.slice(1);
      
    const documentSnapshot = await firestore().collection('AppUser').doc(str2).get();
    const userDocumentData = documentSnapshot.data();
    console.log(userDocumentData)
    return userDocumentData;

}

export async function getSpecificWorkout(DocumentId){
    const documentSnapshot = await firestore().collection('Workouts').doc(DocumentId).get();
    const userDocumentData = documentSnapshot.data();
    return userDocumentData;
}           






