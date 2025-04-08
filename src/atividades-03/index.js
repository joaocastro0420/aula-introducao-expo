import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo3() {
    const [num, setNum] = useState(0);

    // Funções para manipular o estado
    const incrementar = () => setNum(num + 1);
    const decrementar = () => setNum(num > 0 ? num - 1 : 0); // Evita números negativos
    const zerar = () => setNum(0);

    return (
        <View style={styles.container}>
            {/* Título da Atividade */}
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.linha}>
                {/* Botão de Decrementar */}
                <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}>
                    <Text style={styles.textoBotao}>-</Text>
                </TouchableOpacity>

                {/* Número no centro */}
                <Text style={styles.numero}>{num}</Text>

                {/* Botão de Incrementar */}
                <TouchableOpacity style={styles.botaoMais} onPress={incrementar}>
                    <Text style={styles.textoBotao}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Botão de Zerar */}
            <TouchableOpacity style={styles.botaoZerar} onPress={zerar}>
                <Text style={styles.textoBotao}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo3;