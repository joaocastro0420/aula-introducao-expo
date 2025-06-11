import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default function Atividade() {
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Atividade</Text>
       

        <TouchableOpacity style={styles.button}>
           <Text> Atividade 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
           <Text> Atividade 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text> Atividade 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text> Atividade 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text> Atividade 5</Text>
        </TouchableOpacity>

      
        
        
         
           
        </View>
    );

}