import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { theme } from "../../themes/theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "../../components/Icons";

export const ToDoList = () => {

    const [input, setInput] = useState<string>('');
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const save = (text: string) => 
    {
        const newList = [...todoList, {id: (todoList.length + 1), title: text, checked: false}];
        setTodoList(newList);
        storeData(newList);
    }

    const storeData = async (value: ITask[]) =>
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

    const removeItem = (id: number) =>
    {
        try
        {
            Alert.alert('Remover Item', 'Deseja realmente excluir este item?', 
            [
                {
                    text: 'Cancelar',
                    onPress: () =>
                    {
                        console.log('Cancelado');
                    }
                },
                {
                    text: 'Sim',
                    onPress: () =>
                    {
                        const newTodoList = todoList.filter(item => item.id != id);
                        setTodoList(newTodoList);
                        storeData(newTodoList);
                    }
                }
            ]);
        }
        catch (error)
        {
            console.log("removeItem: ", error);
        }
    }

    const updateItem = (id: number) =>
    {
        try
        {
            todoList.map(item =>
            (item.id === id) ? {...item, checked: !item.checked} : {...item})  
        }
        catch (error)
        {
            console.log('updateItem' + error);
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            const fetch = await getData();
            setTodoList(fetch);
        }

        fetchData();

    }, []);

    const Item = ({id, title, checked}: ITask) => (
        <View style={{ flexDirection: 'row'}} >
            <TouchableOpacity onPress={() => updateItem(id)} >
                <Icon name={checked ? 'check-square' : 'square'} size={22} />
            </TouchableOpacity>
            <Text style={[theme.listItem, {fontSize: 20}]} >{title}</Text>
            <TouchableOpacity onPress={() => removeItem(id)}>
                <Icon name='trash' size={22} />
            </TouchableOpacity>
        </View>
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

            <FlatList
                data={todoList}
                renderItem={({ item }) => <Item title={item.title} id={item.id} checked={item.checked} />}
                keyExtractor={item => item.id?.toString()}
            />
        </SafeAreaView>
    )
}