import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { MainHomeButton } from './MainHomeButtons';
import { getSpecificWorkout } from '../api/user';
import WorkoutContainer from './WorkoutContainer';


const RenderWorkoutPageComponents = ({navigation, documentID}) => {
    const [userDocumentData, setUserDocumentData] = useState(null);

    // Use useEffect to fetch the data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getSpecificWorkout(documentID);
            setUserDocumentData(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);
    
    if (!userDocumentData) {
        // Render a loading indicator or null while the data is being fetched
        return null; // You can also render a loading spinner or some text here
    }

    const userDataMap = new Map();
    userDataMap.set("Legs", userDocumentData.Legs);
    userDataMap.set("Back", userDocumentData.Back);
    userDataMap.set("Bicep", userDocumentData.Bicep);
    userDataMap.set("Cardio", userDocumentData.Cardio);
    userDataMap.set("Chest", userDocumentData.Chest);
    userDataMap.set("Tricep", userDocumentData.Tricep);
    userDataMap.set("Shoulders", userDocumentData.Shoulders);


    const muscleGroups = userDocumentData.muscleGroups;

    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < muscleGroups.length; i++) {
        let array = userDataMap.get(muscleGroups[i]);
        components.push(<WorkoutContainer key={i} navigation={navigation}  muscleGroup={muscleGroups[i]} exerciseList={array}/>);
        
        }
        return components;
    };

    try {
        return(<View>{renderComponents()}</View>)
    } 
    catch(error){
        console.log(error)
        return Alert.alert("something went wrong", "something went wrong")
    }
        
    
}

export default RenderWorkoutPageComponents;
