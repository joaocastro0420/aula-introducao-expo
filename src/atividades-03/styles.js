import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: RFPercentage(3.5), // Tamanho do título reduzido
        fontWeight: 'bold',
        color: '#000000', // Cor azul clara
        marginBottom: RFPercentage(15), // Menor espaçamento abaixo do título
        marginTop: RFPercentage(-30), // Move o título mais para cima
        textAlign: 'center', // Centraliza o texto
        borderWidth: 9,
        borderColor: '#5f5c5e', // Cor azul clara
        borderRadius: RFPercentage(6), // Bordas arredondadas
        padding: RFPercentage(2), // Espaçamento interno
    },
    linha: {
        flexDirection: 'row', // Alinha os itens em linha
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
    numero: {
        fontSize: RFPercentage(6),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    botaoMais: {
        backgroundColor: '#00bfff',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'center',
        width: RFPercentage(12),
        height: RFPercentage(6),
    },
    botaoMenos: {
        backgroundColor: '#ff0000',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'center',
        width: RFPercentage(12),
        height: RFPercentage(6),
    },
    botaoZerar: {
        backgroundColor: '#5f5c5e',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFPercentage(4),
        width: '50%',
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        
    },
});

export default styles;