import React, { useState, useEffect, useRef } from 'react'; 

import { 

    View, Text, StyleSheet, 

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator 

} from 'react-native'; 

import { TextInput } from 'react-native-paper'; 
export default function GerenciarProdutos() {  
    const [name, setNome] = useState(''); 

    const [brand, setTamanho] = useState(''); 
  
    const [price, setDescricao] = useState(''); 
  
    const [color, setMetodopagamaneto] = useState(''); 
  
    const [key, setKey] = useState(''); 

    return ( 

        <View style={styles.container}> 

            <TextInput 

                placeholder='Nome' 

                left={<TextInput.Icon icon="car" />} 

                maxLength={40} 

                style={styles.input} 

                onChangeText={(texto) => setNome(texto)} 

                value={nome} 

            /> 

            <TextInput 

                placeholder='Tamanho' 

                left={<TextInput.Icon icon="sale" />} 

                style={styles.input} 

                onChangeText={(texto) => setTamanho(texto)} 

                value={brand} 

            /> 

            <TextInput 

                placeholder='Descricao' 

                left={<TextInput.Icon icon="sack" />} 

                style={styles.input} 

                onChangeText={(texto) => setDescricao(texto)} 

                value={price} 

            /> 

            <TextInput 

                placeholder='Metodopagamaneto' 

                left={<TextInput.Icon icon="color" />} 

                style={styles.input} 

                onChangeText={(texto) => setMetodopagamaneto(texto)} 

                value={color} 

            />                  

        </View> 

    ); 

} 

 
}