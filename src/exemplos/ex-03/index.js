import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo3() {  

    function handleExibeMensagem () {
        Alert.alert('Teste')
    }

    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
              text: 'Meu texto',
              onPress: () => Alert.alert('Tchau'),
              style: 'default',
            },
          ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis vs State</Text>
            <View style={styles.botaoAlerta}>
             <Button
                onPress={handleOutroJeitoFuncao}
                title="Alerta"
                color="deepskyblue"
                accessibilityLabel="Mensagem de alerta"                  
            />
            </View>
            <Text>valor</Text>
            <TouchableOpacity>
                <Text style={styles.botao}>adicionar+1</Text>
            </TouchableOpacity>
          
        </View>
    );
}

export default Exemplo3;

