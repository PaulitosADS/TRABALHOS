import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './tela3styles';
import { useRoute } from '@react-navigation/native';

const Tela3 = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const cpfRef = useRef(null);
  const rgRef = useRef(null);

  const route = useRoute()

  const {nome, sobrenome} = route.params;

  const handleNext = () => {
    if (cpf.trim() === '' || rg.trim() === '') {
      alert('Por favor, preencha o CPF e o RG.');
    } else {
      navigation.navigate('Tela4', { cpf: cpf, rg: rg , nome, sobrenome});
      cpfRef.current.blur();
      rgRef.current.blur();
      Keyboard.dismiss();
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Informe seu CPF</Text>
          <TextInput
            ref={cpfRef}
            style={styles.input}
            value={cpf}
            onChangeText={(text) => setCpf(text.replace(/[^0-9]/g, ''))}
            placeholder="Digite seu CPF (somente números)"
            keyboardType="numeric"
            onBlur={() => Keyboard.dismiss()}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Informe seu RG</Text>
          <TextInput
            ref={rgRef}
            style={styles.input}
            value={rg}
            onChangeText={(text) => setRg(text.replace(/[^0-9]/g, ''))}
            placeholder="Digite seu RG (somente números)"
            keyboardType="numeric"
            onBlur={() => Keyboard.dismiss()}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonBack} onPress={handleBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tela3;
