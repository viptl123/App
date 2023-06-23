import Workout from "./Objects/Workout";
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: 140,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 20,

    },
    button: {
        
        width: 140,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        


       

    },
    buttonText: {
      color: 'black',
      textAlign: 'center',

    },
  });

const WorkoutSelector = ({Workout}) => {
  const [buttonColor, setButtonColor] = useState('white');

  const changeStyles = () => {
    setButtonColor(prevColor => prevColor === 'white' ? 'blue' : 'white');
  };

  return (
    <View style={[styles.container, { backgroundColor: buttonColor }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={changeStyles}
      >
        <Text style={styles.buttonText}>{Workout.workoutName}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WorkoutSelector;