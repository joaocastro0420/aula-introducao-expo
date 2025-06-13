import {View, Text, ImageBackground } from 'react-native';   

import styles from './styles.js';

import  Imagem from '../../assets/react.png';


function Sobre() {
  return (
    <View style={styles.container}>
        <ImageBackground 
        source={Imagem}
        resizeMode="contain"
        imageStyle={{ opacity: 1 }}
        style={styles.image}

        >
        
      <Text style={ styles.titulo}> Sobre</Text>
      <Text style={styles.texto}>aula de react-native com expo</Text>
      <Text style={styles.texto}>Exemplos e Atividades</Text>


      </ImageBackground>
    </View>



    
  );
}


export default Sobre;