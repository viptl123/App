import { KeyboardAvoidingView, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Routes from "../Navigation/Routes";
import WorkoutHomeButton from "../Components/WorkoutHomeButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { RefreshControl } from "react-native-gesture-handler";



const Home = ({navigation}) => {
    const logOutUser=() =>{
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    const goToWorkoutSelectionScreen = () => {
        navigation.navigate(Routes.MuscleGroups)
    }
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 10000);
  }, []);

    const goToCalenderScreen = () =>{
        navigation.navigate(Routes.CalenderScreen);
    }
    
    return (
   
            <View style={Styles.background}>
        
                <View style= {Styles.LogOutButtonContainer}>
                    <TouchableOpacity
                    onPress={logOutUser}
                    style={Styles.logOutButton}
                    >
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
                


                <View style={Styles.otherButtonContainer}>
                    <TouchableOpacity 
                    style= {Styles.addButton}
                    onPress={goToWorkoutSelectionScreen}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>

                <WorkoutHomeButton navigation={navigation}></WorkoutHomeButton>
                    

                </View>
            
                </View>

        
    );
}
export default Home;

const Styles = StyleSheet.create({
    addButton: {    
        backgroundColor: "#ff8e72",
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 5,
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        width: '100%',
        fontSize: 20
    }, 
    Text: {
    }, 
    logOutButton: {
        backgroundColor: "#ff8e72",
        borderRadius: 7,
        padding: 5,
        borderRadius: 15,
        borderWidth: 2,
        width: '20%',
        alignItems: 'center',
        margin: 5,
    },
    otherButtonContainer: {
        alignItems:'center',
    },
    LogOutButtonContainer: {
        alignItems: 'flex-end'
    },
    background: {
        backgroundColor: '#FBD87F',
        flex: 1,
    }
})