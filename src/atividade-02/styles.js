import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8,
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#000000',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: '90%',
    },
    imagemPequena: {
        width: '80%', // Reduz a largura da imagem
        height: 80,  // Altura menor para caber na tela
        resizeMode: 'contain',
        marginBottom: 10,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    preco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#28a745',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
    },
});

export default styles;