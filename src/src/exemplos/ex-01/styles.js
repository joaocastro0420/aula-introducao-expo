import { StyleSheet, TextComponent } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    flex : 1,
    alignItems: "center",
    

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

  Texto: {
    fontSize: RFPercentage(2.5),
    color: "deepskyblue",
  },
});

export default styles;