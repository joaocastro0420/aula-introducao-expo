import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import Constants from 'expo-constants';

// exemplos 
import Exemplo1 from './src/exemplos/ex-01';

//atividades
import Atividades1 from './src/atividades-01';

//atividades
import Exemplo2 from './src/exemplos/ex-02';

//atividades
import Atividade2 from './src/atividade-02';

//exemplos 
import Exemplo3 from './src/exemplos/ex-03';

//atvidades
import Atividade3 from './src/atividades-03';

//atividades
import Exemplo4 from './src/exemplos/ex-04';

//atvidades
import Atividade4 from './src/atividade-04';

//atividades
import Exemplo5 from './src/exemplos/ex-05';

//atividades
import Atividade5 from './src/atividade-05';

//atividades
import Exemplo6 from './src/exemplos/ex-06';

//atividades

import Exemplos from './src/exemplos/';

//atividades

import Atividades from './src/atividades/';

//atividades

import Sobre from './src/sobre/index';




// atividades 
export default function App() {
  return (
    <View style={styles.container}>
      <Sobre/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,
  },
});
