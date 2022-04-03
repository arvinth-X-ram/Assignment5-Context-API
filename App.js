import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ContextProvider from './context/Count';
import MainScreen from './components/MainScreen.js';
import TopView from './components/topview';
import Bottom from './components/bottom';
export default function App() {
  return (
   
   <ContextProvider>
    <TopView></TopView>
    <MainScreen/>
    <Bottom></Bottom>
   </ContextProvider>
   
  
  );
}

