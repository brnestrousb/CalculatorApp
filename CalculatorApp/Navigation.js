// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './App'; // Ganti dengan nama file kalkulator Anda

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }}> {/* Pastikan header ditampilkan */}
      <Stack.Screen name="App" component={Calculator} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
