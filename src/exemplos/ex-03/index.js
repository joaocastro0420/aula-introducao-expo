import {View, Text} from 'react-native';   

import styles from './styles';


function Exemplo3() {
  return (
    <View style={styles.container}>
      <Text style={ styles.titulo}> exemplo 3</Text>
      <Text style={styles.texto}>variaveis vs state</Text>
      <Button
      onPress= {() => {}}
      title='alerta'
      color='deepskyblue'
      accessibilityLabel='Clique para ver um alerta'/>
    </View>
  );
}


export default Exemplo3;