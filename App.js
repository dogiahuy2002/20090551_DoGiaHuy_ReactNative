import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";

import App01 from './App01';
import AppDemo from './AppDemo';  
import App02 from './App02';

export default function App() {
  return (
    <App02 />
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
