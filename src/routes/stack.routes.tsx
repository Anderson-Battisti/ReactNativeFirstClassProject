import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contador from "../screens/Contador";
import { Account } from "../screens/Account";
import { Home } from "../screens/Home/Home";
import { ToDoList } from "../screens/ToDoList/ToDoList";
import { Login } from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

export function StackRoutes()
{
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Contador" component={Contador} />
            <Stack.Screen name="ToDoList" component={ToDoList} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}