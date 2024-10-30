// App.js
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import Navigation from './Navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* Tambahkan GestureHandlerRootView */}
      <Navigation />
    </GestureHandlerRootView>
  );
}
