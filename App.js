import React from 'react';
import { SafeAreaView } from 'react-native';
import TicTacToe from './components/TicTacToe';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TicTacToe />
    </SafeAreaView>
  );
}
