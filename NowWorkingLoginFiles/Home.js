import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';
import { View } from "react-native";


const Home = ({navigation}) => {


    const logOutUser=() =>{
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    
    return (
        <View>
        <Text>
            Home
            <TouchableOpacity
            onPress={logOutUser}
            >
                <Text>Log Out</Text>
            </TouchableOpacity>
        </Text>
        </View>
    );
}
export default Home;