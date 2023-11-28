import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './tela1styles';

const Tela1 = ({ navigation }) => {
  const handleIniciarPress = () => {
    console.log("Botão 'INICIAR' pressionado!");
    navigation.navigate('Tela2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.uniparContainer}>
        <Text style={styles.uniparText}>UNIPAR</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iniciarContainer} onPress={handleIniciarPress}>
          <Text style={styles.iniciarText}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tela1;
