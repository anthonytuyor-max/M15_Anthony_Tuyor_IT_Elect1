import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="White"
          onPress={() => setBackgroundColor('#ffffff')}
          color="#34495e"
        />
        <Button
          title="Light Blue"
          onPress={() => setBackgroundColor('#aed6f1')}
          color="#3498db"
        />
        <Button
          title="Light Green"
          onPress={() => setBackgroundColor('#a9dfbf')}
          color="#2ecc71"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default ColorChangerApp;
