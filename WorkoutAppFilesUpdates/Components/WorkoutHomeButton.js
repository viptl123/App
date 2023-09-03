import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { MainHomeButton } from './MainHomeButtons';
import { getWorkoutData } from '../api/user';


const WorkoutHomeButton = ({navigation}) => {
    const [userDocumentData, setUserDocumentData] = useState(null);

    // Use useEffect to fetch the data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getWorkoutData();
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

   
    const docIds = userDocumentData.workoutIds;
    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < userDocumentData.numberWorkouts; i++) {
        components.push(<MainHomeButton key={i} DocumentIds={docIds[i]} navigation={navigation}/>);
        }
        return components;
    };

    return <View>{renderComponents()}</View>;
};

export default WorkoutHomeButton;
