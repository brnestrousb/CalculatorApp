import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Calculator = () => {
  const [input, setInput] = useState(''); // Menyimpan input kalkulator
  const [result, setResult] = useState(''); // Menyimpan hasil perhitungan

  const handleInput = (value) => {
    setInput(input + value); // Menambahkan input
  };

  const handleClear = () => {
    setInput(''); // Menghapus input
    setResult(''); // Menghapus hasil
  };

  const handleEqual = () => {
    try {
      setResult(eval(input)); // Evaluasi input menjadi hasil
    } catch (error) {
      setResult('Bener'); // Jika ada error saat evaluasi
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{result ? result : ''}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}></View>
        {['1', '2', '3'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleInput(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleInput('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {['4', '5', '6'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleInput(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleInput('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {['7', '8', '9'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handleInput(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleInput('*')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleClear()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInput('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqual()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>

          
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleInput('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  resultContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    paddingRight: 40,
    paddingLeft: 40,
  },
  resultText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'normal',
    includeFontPadding: false,
    flexWrap: 'wrap',
  },
  buttonsContainer: {
    flex: 5,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  button: {
    width: '25%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 30,
    fontFamily: 'monospace',
    borderStyle: 'solid',
    borderWidth: 3,
    borderheight: 3,
    borderColor: 'black',
  },
  operatorButton: {
    backgroundColor: 'orange', // Warna khas untuk operator
    width: '25%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 30,
    fontFamily: 'monospace',
    borderStyle: 'solid',
    borderWidth: 3,
    borderheight: 3,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 30,
    fontStyle: 'bold',
    color: 'black',
    marginBottom: 10,
    marginHorizontal: 10,
    padding : 10,
    display: 'flex',
    justifyContent: 'center',
  },
  operatorText: {
    fontSize: 30,
    color: 'black',
  },
});

export default Calculator;