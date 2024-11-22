import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "../../components/Icons";
import { theme } from "../../themes/theme";

export function Home()
{

    const navigator = useNavigation<NavigationProps>();

    return (
        <SafeAreaView style={theme.container}>
            <Icon name={"home"} size={32} />
            <View style={theme.buttonView}>
                <TouchableOpacity onPress={() => navigator.navigate("Account")} style={theme.button}>
                    <Text style={theme.buttonText}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.navigate("Contador")} style={theme.button}>
                    <Text style={theme.buttonText}>Contador</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.navigate("ToDoList")} style={theme.button}>
                    <Text style={theme.buttonText}>To Do List</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}