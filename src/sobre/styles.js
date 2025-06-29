import { StyleSheet } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 8,
    flex: 1,
    // alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
      fontSize: RFPercentage(3),
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: 'deepskyblue',
      marginTop: 10,
      marginBottom: 10,
      padding: 8,
      width: '100%',
      height: 80,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 20,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    // color: 'deepskyblue',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    // opacity: 0.5,
  }
});

export default styles;
