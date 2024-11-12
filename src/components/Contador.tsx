import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black', fontSize: 22}}>Contador: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Incrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});