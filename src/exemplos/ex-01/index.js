import {View, Text} from 'react-native';   

import styles from './styles';


function Exemplo1() {
  return (
    <View style={styles.container}>
      <Text style={ styles.titulo}> exemplo 1</Text>
      <Text style={styles.texto}>aula de react-native com expo</Text>
    </View>
  );
}


export default Exemplo1;