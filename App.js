import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import constants from 'expo-constants';
// exemplos 
import Exemplo1 from './src/exemplos/ex-01';
// atividades 
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: constants.statusBarHeight || 8,
  },
});
