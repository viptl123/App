import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const ExerciseButton = ({workoutArea, position, exercise}) => {
  const [isSelected, setIsSelected] = useState(false);

  // Function to handle the press event and toggle the selection
  const handlePress = () => {
    setIsSelected(!isSelected);
    workoutArea.addExercise(exercise);

  };




  return (
    <View style={position}>
      {/* TouchableOpacity with dynamic style based on isSelected */}
      <TouchableOpacity
        style={[styles.touchable, isSelected && styles.selectedTouchable]}
        onPress={handlePress}
      >
        <Text style={styles.text}>{exercise.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ExerciseButton;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 140,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
   
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