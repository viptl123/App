import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {isSignedIn, signInUser,signOutUser,} from './LoginScreen';
import {} from 'react-native-gesture-handler';
import SignOutButton from '../Components/SignOutButton';


const HomeScreen = ({navigation}) => { 
    console.log("start");   
    return (

        <View>
        <Text>hello</Text>
        <SignOutButton/>
                
        
        <Text style={styles.container}>Home Screen</Text>
        </View>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      fontSize: 30,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



