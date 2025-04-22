import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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




// atividades 
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo5/>
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
    paddingTop: Constants.statusBarHeight || 8,
  },
});
