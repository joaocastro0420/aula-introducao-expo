import {View, Text} from 'react-native';   

import styles from './styles';


function atividades1() {
  return (
    <View style={styles.container}>
      <Text style={ styles.titulo}> atividade 1</Text>
      <Text style={styles.texto}>corinthians x barcelona </Text>
      <Text style={styles.texto}>local: arena corinthians</Text>
      <Text style={styles.texto}>horario: 21:30 </Text>
    </View>

  );
}


export default atividades1;