import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../themes/theme";
import { Icon } from "../../components/Icons";
import { useState } from "react";
import { ILogin } from "../../@types/login";
import axios from "axios";
import { ILoginRet } from "../../@types/loginRet";
import { useNavigation } from "@react-navigation/native";

axios.defaults.baseURL = 'https://dummyjson.com';
export function Login()
{
    const navigation = useNavigation<NavigationProps>();
    const [login, setLogin] = useState<ILogin>({username: '', password: ''});

    const doLogin = async () =>
    {
        if (login.username.length <= 0)
        {
            Alert.alert('Informe o nome de usuário');
            return;
        }
        if (login.password.length <= 0)
        {
            Alert.alert('Informe a senha');
            return;
        }

        const { data } = await axios
        .post<ILoginRet>('/auth/login', login)
        .catch(err => {
            Alert.alert('Ops', 'Credenciais inválidas');
            return {data: null} as {data: ILoginRet | null};
        });

        if (data)
        {
            console.log('Token:', data.accessToken);
            console.log('User id:', data.id);

            navigation.reset({
                routes: [{name: 'Home'}], index: 0
            });
        }
    }
    
    return (
        <View style={[theme.container]}>
            <Icon name='lock' />
            <Text style={theme.label}>Faça o Login</Text>
            <TextInput
                style={theme.input}
                placeholder="Nome de usuário"
                value={login?.username}
                onChangeText={text => setLogin({...login, username: text})}
            />

            <TextInput
                style={theme.input}
                placeholder="Senha"
                value={login?.password}
                onChangeText={text => setLogin({...login, password: text})}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={theme.button}
                onPress={() => doLogin()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}