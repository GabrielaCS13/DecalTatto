import React, { useState, useEffect, useRef } from 'react';

import {

    View, Text, StyleSheet, Button,

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator

} from 'react-native';

import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectinFirebase';


const Separator = () => {

    return <View style={styles.separator} />;

}

export default function GerenciarPerfil() {

    const [nome, setNome] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [key, setKey] = useState('');  


    //implementação dos métodos update ou insert 

    async function insertUpdate() {

        //editar dados 

        if (nome !== '' & datanascimento !== '' & telefone !== '' & cidade !== '' & endereco !== '' & key !== '') {

            firebase.database().ref('perfil').child(key).update({

                nome: nome, datanascimento: datanascimento, telefone: telefone, cidade: cidade, endereco: endereco

            })

            Keyboard.dismiss();

            alert('Produto Editado!');

            clearFields();

            setKey('');

            return;

        }

        //cadastrar dados 

        let perfil = await firebase.database().ref('perfil');

        let chave = perfil.push().key; //comando para salvar é o push 



        perfil.child(chave).set({

            nome: nome,

            datanascimento: datanascimento,

            telefone: telefone,

            cidade: cidade,

            endereco: endereco


        });

        Keyboard.dismiss();

        alert('Perfil Cadastrado!');

        clearFields();

    }

    function clearFields() {
        setNome('');
        setDatanascimento('');
        setTelefone('');
        setCidade('');
        setEndereco('');
    }



    return (

        <View style={styles.container}>

            <TextInput

                placeholder='Nome'

                left={<TextInput.Icon icon="account" />}

                maxLength={40}

                style={styles.input}

                onChangeText={(text) => setNome(text)}

                value={nome}

            />

            <TextInput

                placeholder='Datanascimento'

                left={<TextInput.Icon icon="calendar-range" />}

                style={styles.input}

                onChangeText={(text) => setDatanascimento(text)}

                value={datanascimento}

            />

            <TextInput

                placeholder='Telefone'

                left={<TextInput.Icon icon="phone" />}

                style={styles.input}

                onChangeText={(text) => setTelefone(text)}

                value={telefone}

            />


            <TextInput

                placeholder='Cidade'

                left={<TextInput.Icon icon="city" />}

                style={styles.input}

                onChangeText={(text) => setCidade(text)}

                value={cidade}

            />
            <TextInput

                placeholder='Endereco'

                left={<TextInput.Icon icon="home-floor-a" />}

                style={styles.input}

                onChangeText={(text) => setEndereco(text)}

                value={endereco}

            />

            <View style={styles.button}>

                <Button

                    onPress={insertUpdate}

                    title="Adicionar"

                    color="#080"

                    accessibilityLabel=""

                />
            </View>

        </View>

    );

}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        margin: 10,

    },

    input: {

        borderWidth: 1,

        borderColor: '#121212',

        height: 40,

        fontSize: 13,

        borderRadius: 8

    },

    separator: {

        marginVertical: 5,

    },

    button: {

        flexDirection: 'row',

        alignItems: 'center',

        backgroundColor: '#3ea6f2',

        borderWidth: 0.5,

        borderColor: '#fff',

        height: 40,

        borderRadius: 5,

        margin: 5,

    },

    buttonImageIconStyle: {

        padding: 10,

        margin: 5,

        height: 25,

        width: 25,

        resizeMode: 'stretch',

    },

    buttonTextStyle: {

        color: '#fff',

        marginBottom: 4,

        marginLeft: 100,

        fontSize: 20

    },

    buttonIconSeparatorStyle: {

        backgroundColor: '#fff',

        width: 1,

        height: 20,

    },

    listar: {

        fontSize: 20,

        textAlign: 'center'

    }

}); 