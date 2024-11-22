import { SafeAreaView, ScrollView, Text, TextInput } from "react-native"
import { theme } from "../../themes/theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ToDoList = () => {

    const [input, setInput] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const save = (text: string) => 
    {
        const newList = [...todoList, text];
        setTodoList(newList);
        storeData(newList);
    }

    const storeData = async (value: string[]) =>
    {
        try 
        {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('list', jsonValue);
        } 
        catch (e) 
        {
          // saving error
        }
    };

    const getData = async () => 
    {
        try 
        {
          const jsonValue = await AsyncStorage.getItem('list');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } 
        catch (e) 
        {
          // error reading value
        }
      };

    useEffect(() => 
        {
            const fetchData = async () =>
            {
                let toDoList: string[] = await getData();
                setTodoList(toDoList);
            }
            fetchData();
        }, [] // O array de dependencias vazio faz com que esse useEffect seja executado apenas 1 vez, na primeira vez que a tela for renderizada
    );

    return (
        <SafeAreaView style={theme.container}>
            <TextInput
                style={theme.input}
                onChangeText={(value) => setInput(value)}
                value={input}
                onSubmitEditing={() => {
                    save(input);
                    setInput('');
                }}
            />

            <Text style={theme.label}>Lista de Tarefas:</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    todoList.map((tarefa, index) => (
                        <Text
                            style={theme.listItem}
                            key={index}>{tarefa}</Text>
                    ))
                }
            </ScrollView> 
        </SafeAreaView>
    )
}