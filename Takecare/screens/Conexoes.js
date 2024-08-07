//import React, { useState, useEffect } from 'react';
import { View,Image,TouchableOpacity,StyleSheet, Text} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const Conexoes = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/logotk.png')}
          resizeMode="contain"
        />
        <Text style={styles.texto}>Conexões</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Seguranca')}>
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
    img:{
        width: 100,
        height: 100
    },
    texto:{
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50
    },
    texto2:{
        color: '#fff'
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
export default Conexoes;