import { createStackNavigator } from "@react-navigation/stack";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Routes from "./Routes";


const Stack = createStackNavigator();

const MainNavigation = () =>{
    return (
        <Stack.Navigator initialRouteName ={'Login'}>
            <Stack.Screen name={Routes.Register} component ={Register}/>
            <Stack.Screen name={Routes.Login} component={Login}/>
            <Stack.Screen name ={Routes.Home} component={Home} />
        </Stack.Navigator>
    );
}

export default MainNavigation;