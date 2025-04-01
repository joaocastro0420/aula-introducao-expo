import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        backgroundColor: '#ffffff', 
        borderWidth: RFPercentage(0.6), 
        width: '90%', 
        padding: 25, 
        alignItems: 'center', 
        borderRadius: 30, 
        marginBottom: RFPercentage(1),
    }, 
    containerTxt: {
        flexDirection: 'column', 
        width: '70%', 
        paddingLeft: RFPercentage(1), 
    }, 
    titulo: {
        fontSize: RFPercentage(2.5), 
        color: '#000000', 
        fontWeight: 'bold', 
        marginBottom: RFPercentage(1), 
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
        flexWrap: 'wrap', 
        color: '#ff0000',         
    }, 
    imagem: {
        height: RFPercentage(10), 
        width: RFPercentage(13), 
        // width: '80%',  
        resizeMode: 'contain', 
    },
});

export default styles;