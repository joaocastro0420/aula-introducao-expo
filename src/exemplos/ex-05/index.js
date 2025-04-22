import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';   

import styles from './styles';


function Exemplo5() {




  return (

  <View style={styles.container}>
  <Text style={styles.paragraph}>Exemplo 5</Text>

  <text style={styles.txtSaida}>Calculadora básica </text>

  
  <Text style={styles.textLabel}> 1º numero </Text>
  <TextInput
  style={styles.txtEntrada}
  onChangeText={(entrada) => setN1(entrada)}
  value={n1}
  />
    <text style={styles.txtSaida}> +  </text>

  <Text style={styles.textLabel}> 2º numero </Text>
  <TextInput
  style={styles.txtEntrada}
  onChangeText={(entrada) => setN2(entrada)}
  value={n2}
  />
  <text style={[styles.txtSaida, {margin: 0}]}>=  </text>
  <Text style={styles.textLabel}> Total </Text>
  <TextInput
  style={styles.txtEntrada}
  editable={false}
  value={total}
  />

<TouchableOpacity style={styles.button} onPress={() => Soma()}>
  <text style={styles.txtbutton}> + </text>
  </TouchableOpacity>

  </View>

 
  );
}


export default Exemplo5;