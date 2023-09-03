import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Routes from "../Navigation/Routes";
import { getSpecificWorkout } from "../api/user";
import { useState, useEffect } from "react";

export const MainHomeButton = ({DocumentIds, navigation}) =>{
    const docIds = DocumentIds;

    const [name,setName] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getSpecificWorkout(docIds);
            setName(data.name);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);

    const goToWorkoutScreen = () =>{
        navigation.navigate(Routes.WorkoutScreen, {docId: docIds});
    }
    return (
        <View>
            <TouchableOpacity 
            style={Styles.addButton}
            onPress={goToWorkoutScreen}>
                <Text>{name}</Text>
            </TouchableOpacity>
        </View>
    )   
}

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
})