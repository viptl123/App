import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import WorkoutExerciseButton from './WorkoutExerciseButton';


const RenderExerciseButton = ({navigation, exerciseList}) => {
   

  
    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < exerciseList.length; i++) {
        components.push(<WorkoutExerciseButton navigation={navigation} exercise={exerciseList[i]} key={i}/>);
        
        }
        
        return components;
    };

    return <View>{renderComponents()}</View>;
};

export default RenderExerciseButton;
