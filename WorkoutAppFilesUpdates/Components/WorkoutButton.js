import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {muscles} from '../Screens/MuscleGroups';
import { Workout } from './Objects/Workout';

const WorkoutButton = ({workout, position, workoutName}) => {
  const [isSelected, setIsSelected] = useState(false);

  // Function to handle the press event and toggle the selection
  const handlePress = () => {
    setIsSelected(!isSelected);
    workout.addBodyPart(workoutName);
  };




  return (
    <View style={position}>
      {/* TouchableOpacity with dynamic style based on isSelected */}
      <TouchableOpacity
        style={[styles.touchable, isSelected && styles.selectedTouchable]}
        onPress={handlePress}
      >
        <Text style={styles.text}>{workoutName}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WorkoutButton;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 105,
   
  },
  selectedTouchable: {
    backgroundColor: '#007AFF', // Change to your desired selected color
    borderColor: '#007AFF',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
});