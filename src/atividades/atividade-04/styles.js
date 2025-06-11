import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    titulo: {
        fontSize: RFPercentage(3.5), // Tamanho do título reduzido
        fontWeight: 'bold',
        color: '#ff0000', // Cor vermelha
        marginBottom: RFPercentage(2), // Espaçamento abaixo do título
        marginTop: RFPercentage(-10), // Move o título mais para cima
        textAlign: 'center', // Centraliza o texto
        borderWidth: 2, // Adiciona borda
        borderColor: '#ff0000', // Cor da borda vermelha
        borderRadius: RFPercentage(1.5), // Bordas arredondadas
        padding: RFPercentage(1.5), // Espaçamento interno
    },
    linha: {
        flexDirection: 'row', // Alinha os itens em linha
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: RFPercentage(2), // Espaçamento entre as linhas
    },
    numero: {
        fontSize: RFPercentage(6),
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        borderWidth: 2, // Adiciona borda
        borderColor: '#ffffff', // Cor da borda cinza clara
        borderRadius: RFPercentage(1.5), // Bordas arredondadas
        padding: RFPercentage(1), // Espaçamento interno
        width: RFPercentage(10), // Largura fixa para o número
        textAlignVertical: 'center', // Centraliza verticalmente
        marginBottom: RFPercentage(2), // Espaçamento abaixo do número
    },
    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: RFPercentage(1.5),
        padding: RFPercentage(1.5),
        width: '80%',
        marginBottom: RFPercentage(2), // Espaçamento entre os campos de entrada
        fontSize: RFPercentage(2.5),
        color: '#ffffff',
    },
    botaoMais: {
        backgroundColor: '#00bfff',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'center',
        width: RFPercentage(8),
        height: RFPercentage(8),
        borderWidth: 2, // Adiciona borda
        borderColor: '#00bfff', // Cor da borda azul clara
        marginBottom: RFPercentage(2), // Espaçamento abaixo do botão
    },
    botaoMenos: {
        backgroundColor: '#00bfff',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'center',
        width: RFPercentage(8),
        height: RFPercentage(8),
        borderWidth: 2, // Adiciona borda
        borderColor: '#00bfff', // Cor da borda azul clara
        marginBottom: RFPercentage(2), // Espaçamento abaixo do botão
    },
    botaoZerar: {
        backgroundColor: '#ffffff',
        padding: RFPercentage(2),
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFPercentage(4),
        width: '50%',
        borderWidth: 2, // Adiciona borda
        borderColor: '#ffffff', // Cor da borda azul clara
        marginBottom: RFPercentage(2), // Espaçamento abaixo do botão
    },
    textoBotao: {
        color: '#fff',
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
    },
});

export default styles;