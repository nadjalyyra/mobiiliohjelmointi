import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default function Index() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculate = (operation: string) => {
    // Tarkistetaan, ettei kentät ole tyhjiä
    if (number1.trim() === '' || number2.trim() === '') {
      setError('Syötä molempiin kenttiin numero.');
      setResult('');
      return;
    }

    // TextInput antaa pelkkää tekstiä, niin muutetaan tämä numeroksi 
    const num1 = Number(number1);
    const num2 = Number(number2);

    // Varmistus, että kyseessä on oikeasti numero
    if (isNaN(num1) || isNaN(num2)) {
      setError('Syötä vain numeroita.');
      setResult('');
      return;
    }

    // All good -> poistetaan virheilmoitus
    setError('');

    if (operation === '+') {
      setResult(String(num1 + num2));
    }

    if (operation === '-') {
      setResult(String(num1 - num2));
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Laskin</Text>

      <TextInput
        style={styles.input}
        placeholder="Ensimmäinen numero"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <TextInput
        style={styles.input}
        placeholder="Toinen numero"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <View style={styles.buttons}>
        <Button
          title="+"
          onPress={() => calculate('+')}
        />

        <Button
          title="-"
          onPress={() => calculate('-')}
        />
      </View>

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      <Text style={styles.result}>
        Tulos: {result}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    marginBottom: 30,
  },

  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },

  buttons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },

  result: {
    fontSize: 22,
    marginTop: 30,
  },

  error: {
    color: 'red',
    marginTop: 20,
  },
});
