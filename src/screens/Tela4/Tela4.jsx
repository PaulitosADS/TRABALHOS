import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './tela4styles';

const Tela4 = ({ route, navigation }) => {
  const { nome, sobrenome, cpf, rg } = route.params;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleFinish = () => {
    navigation.navigate('Tela1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Olá, {nome} {sobrenome}</Text>
        <Text style={styles.documentHolder}>Portador do documento</Text>
        <Text style={styles.label}>CPF</Text>
        <Text style={styles.result}>{cpf}</Text>
        <Text style={styles.label}>RG</Text>
        <Text style={styles.result}>{rg}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonBack} onPress={handleBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tela4;
