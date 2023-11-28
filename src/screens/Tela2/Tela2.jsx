import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './tela2styles';

const Tela2 = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const handleNext = () => {
    if (nome.trim() === '' || sobrenome.trim() === '') {
      alert('Por favor, preencha seu nome e sobrenome.');
    } else {
      navigation.navigate('Tela3', { nome: nome, sobrenome: sobrenome });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Informe seu nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Informe seu sobrenome</Text>
          <TextInput
            style={styles.input}
            value={sobrenome}
            onChangeText={(text) => setSobrenome(text)}
            placeholder="Digite seu sobrenome"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tela2;
