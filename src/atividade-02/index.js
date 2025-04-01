import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import img1 from '../../assets/arma1.png';
import img2 from '../../assets/arma2.png';
import img3 from '../../assets/arma3.png';



function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo={'Camisa Branca e Preta'} img={img1} valor={'350,00'}>ak-47 branca.</Card>
            <Card titulo={'Camisa Preta'} img={img2} valor={'380,00'}>m4a1 dragao.</Card>
            <Card titulo={'Camisa Listrada'} img={img3} valor={'280,00'}>awp hyper beast.</Card>
            
        </View>
    );
}

export default Atividade2;