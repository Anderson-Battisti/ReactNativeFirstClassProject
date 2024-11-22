import { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Account = () =>
{
  const [user, setUser] = useState<IUser>
  ({
    name: "Anderson",
    age: 24,
    city: "Lajeado"
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>Meus dados:</Text>
        <Text>Name: {user.name}</Text>
        <Text>Age: {user.age}</Text>
        <Text>City: {user.city}</Text>
        <TouchableOpacity onPress={() => setUser({... user, age: user.age + 1})}>
            <Text>Make birthday</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create
({
    container:
    {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
});