import { StyleSheet } from "react-native";
import { RFValue  } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    
    },
    titulo: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: 'deepskyblue',
        marginTop: RFValue(10),
        marginTop: RFValue(20),
        marginBottom: RFValue(20),
    },
    button: {
        alignItems: 'center',
        borderWidth: RFValue(3),
        borderColor: 'deepskyblue',
        borderWidth: RFValue(10),
        padding: RFValue(5),    
        width: '80%',
        marginBottom: RFValue(10),

    
    },
});

export default styles;