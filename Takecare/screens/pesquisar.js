import React, { useState } from 'react';
import { View,TouchableOpacity , Image, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pesquisar = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/logotk.png')}
          resizeMode="contain"
        />
        <Text style={styles.texto}>Pesquisar</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Conexões')}>
        <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Alinha itens ao topo
        alignItems: 'center',         // Centraliza itens horizontalmente
        paddingTop: 20, 
      backgroundColor: '#fff',
    },
    texto:{
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50
    },
    img:{
        width: 100,
        height: 100
    },
    button: {
        position: 'absolute', //para posicioná-lo de forma independente do layout principal
        bottom: 30, // Distância da parte inferior da tela
        justifyContent: 'flex-end',
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 15,
        height: 50,
        width: 150,
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
    },
  });

export default Pesquisar;
