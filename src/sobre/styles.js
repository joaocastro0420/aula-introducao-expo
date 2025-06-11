import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    flex : 1,
    borderRadius: 20,
    

  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    borderWidth : 2,
    borderColor : "deepskyblue",
    margin : 10,
    marginBottom : 10,
    padding : 8,
    width : "100%",
    height : 80,
    textAlign : "center",
    textAlignVertical : "center",
  },
    texto: {
    fontSize: RFPercentage(2.5),
    color: "#000000",
  },

  ImageBackground: {
    flex: 1,
    alignItems: "center",
    // opacity: 0.5,
 
  },
});

export default styles;