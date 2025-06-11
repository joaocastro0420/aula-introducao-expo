import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    padding: 8,
    flex : 1,
    alignItems: "center",
    

  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    borderWidth : 5,
    color: "#7c7a7a",
    borderColor : "#000000",
    borderRadius : 25,
    margin : 5,
    marginBottom : 5,
    padding : 8,
    width : "100%",
    height : 80,
    textAlign : "center",
    textAlignVertical : "center",
  },
    texto: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    borderWidth : 5,
    color: "#7c7a7a",
    borderColor : "#000000",
    borderRadius : 25,
    margin : 2,
    marginBottom : 5,
    padding : 8,
    width : "100%",
    height : 80,
    textAlign : "center",
    textAlignVertical : "center",
  },
});

export default styles;