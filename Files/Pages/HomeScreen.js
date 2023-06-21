import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const HomeScreen = () => {

    return (
        <View>
            <Text style = {styles.container}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default HomeScreen;


