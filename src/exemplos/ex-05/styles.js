import { Button, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff80ab",
    padding: 8,
    justifyContent: "center",
  },
  paragraph: {
    margin: 6,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#c51162",
  },
  txtSaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E91E63",
  },
  txtEntrada: {
   borderWidth: 4,
   textAlign: "center",
   fontSize: 22,
   borderColor: "#E91E63",
   height: 60,
   color: "#E53935",
   borderRadius: 10,
   marginTop: 10,
  },
  Button: {
    backgroundColor: "#E91E63",
   height : 40,
   justifyContent: "center",
   borderRadius: 10,
    marginTop: 20,
  },
  txtbutton: {
    fontSize: 22,
    textAlign: "center",
    color: "#FF80AB",
  },
  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C51162",

  },




    


});

export default styles;