import { View, TouchableOpacity, Text } from "react-native";

export default function Exemplos() {
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Exemplos</Text>
       

        <TouchableOpacity style={styles.button}>
           <Text> Exemplo 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
           <Text> Exemplo 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text> Exemplo 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text> Exemplo 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text> Exemplo 5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
           <Text> Exemplo 6</Text>
        </TouchableOpacity>

        
        
         
           
        </View>
    );

}