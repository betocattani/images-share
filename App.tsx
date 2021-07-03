import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import dog from './assets/dog.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={dog} style={styles.logo} />

      <Text style={styles.instructions}>
        Dog App
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 280,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 20,
    marginHorizontal: 15,
  },
});
