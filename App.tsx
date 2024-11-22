import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutes } from "./src/routes/stack.routes";

const Stack = createNativeStackNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}