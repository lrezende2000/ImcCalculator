import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

export default function App() {
  const [imc, setIMC] = useState(0);
  const [situation, setSituation] = useState('');
  const [weight, setWeight] = useState(66.1);
  const [height, setHeight] = useState(1.72);
  const [bgColor, setBgColor] = useState('#bdc3c7');

  function calcIMC(weight, height) {
    const imc = (weight / Math.pow(2, height)).toFixed(2)
    
    
    setIMC(imc);

    if(imc < 18.5){
      setSituation('Magreza')
      setBgColor('#e74c3c')
    } else if(imc < 25){
      setSituation('Normal')
      setBgColor('#2ecc71')
    } else if(imc < 30){
      setSituation('Sobrepeso')
      setBgColor('#f1c40f')
    } else if(imc < 40){
      setSituation('Obesidade')
      setBgColor('#e67e22')
    } else {
      setSituation('Obesidade Grave')
      setBgColor('#e74c3c')
    }
  }

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Seu IMC</Text>
      
      <View style={[styles.resultContainer, {backgroundColor: bgColor}]}>
        <Text style={styles.imc}>{imc}</Text>
        <Text style={styles.situation}>{situation}</Text>
      </View>

      <TextInput 
        style={styles.input}
        mode="outlined"
        label="Altura"
        onChangeText={text => setHeight(text)}          
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Peso"
        onChangeText={text => setWeight(text)}
      />
      <Button 
        mode="contained"
        style={{margin: 10, padding: 10}}
        onPress={() => calcIMC(weight, height)} 
      >
        Calcular
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 20,
    justifyContent: "center",
    
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  resultContainer: {
    width: 250,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 20,
    borderRadius: 12,
  },
  imc: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  situation: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    margin: 10,
  }
});
