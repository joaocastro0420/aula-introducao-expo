import { View, Text, Image } from 'react-native'; 
import styles from './styles';

// Caminhos corrigidos para as imagens
import arma1 from '../../assets/arma1.png';
import arma2 from '../../assets/arma2.png';
import arma3 from '../../assets/arma3.png';

function Exemplo2() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja de Armas</Text>

            {/* Anúncio 1 */}
            <View style={styles.card}>
                <Image source={arma1} style={styles.imagem} />
                <Text style={styles.nome}>AK-47</Text>
                <Text style={styles.preco}>R$ 2.500,00</Text>
                <Text style={styles.descricao}>A AK-47 é uma das armas mais populares do mundo, conhecida por sua confiabilidade e poder de fogo.</Text>
            </View>

            {/* Anúncio 2 */}
            <View style={styles.card}>
                <Image source={arma2} style={styles.imagem} />
                <Text style={styles.nome}>M4A1</Text>
                <Text style={styles.preco}>R$ 3.000,00</Text>
                <Text style={styles.descricao}>A M4A1 é uma arma versátil, ideal para combates de médio alcance, com alta precisão.</Text>
            </View>

            {/* Anúncio 3 */}
            <View style={styles.card}>
                <Image source={arma3} style={styles.imagem} />
                <Text style={styles.nome}>AWP</Text>
                <Text style={styles.preco}>R$ 4.750,00</Text>
                <Text style={styles.descricao}>A AWP é uma sniper poderosa, capaz de eliminar inimigos com um único disparo.</Text>
            </View>
        </View>
    );
}

export default Exemplo2;