import {View, Text, TextInput} from 'react-native';   
import { useState } from 'react';

import styles from './styles';


function Exemplo4() {

  const [txtInserido, setTxtInserido] = useState('');
  return (
    <View style={styles.container}>
      <Text style={ styles.titulo}> exemplo 1</Text>
      <Text style={styles.texto}>aula de react-native com expo</Text>
      <TextInput style={styles.input} />

    </View>
  );
}


export default Exemplo4;