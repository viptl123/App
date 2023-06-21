import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Register = () => {

    return (
        <View>
            <Text style = {styles.container}>Register Screen</Text>
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
export default Register;


