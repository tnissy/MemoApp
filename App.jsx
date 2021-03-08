/* eslint-disable no-use-before-define */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>Noi</Hello>
      <Hello bang style={{ fontSize: 16 }}>Noita</Hello>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
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
});
