import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  
  
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)}/>
      <Button title="Dec" onPress={() => setCount(count - 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});