/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert} from 'react-native'
import PerfilUsuario from '../../../components/PerfilUsuario'
import ListaAtividades from '../../../components/ListaAtividades'
import AddInscrições from '../../../components/AddInscrições';

import { addInscricao } from '../../../services/Inscricoes'

import ListaAtividadesUsu from '../../../components/ListaAtividadesUsu'


import UsuBtModal from '../../../components/UsuBtModal'
import IdadeModal from '../../../components/IdadeModal'
import GeneroModal from '../../../components/GeneroModal'
import Colors from '../../../styles/Colors'
const UsuarioAtividades = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [idadesVisible, setIdadesVisible] =useState(false);
    const [idadesAtual, setIdadesAtual] = useState("Selecione a idade");

    const [generoVisible, setGeneroVisible] = useState(false);
const [inscVisible, setInscVisible] = useState(false);


    const [generoAtual, setGeneroAtual] = useState("Selecione o gênero");

    const onIdadesPress = item => {
        setIdadesAtual(item);
        onIdadesClosePress();
    }
    const onGeneroPress = item => {
        setGeneroAtual(item);
        onGeneroClosePress();
    }

    const onIdadesOpenPress = () => {
        setIdadesVisible(true);
    }
    const onGeneroOpenPress = () => {
        setGeneroVisible(true);
    }

    const onInscOpenPress = () => {
        //setInscVisible(true);
        Alert.alert('apertou aqui');
    }

    const onIdadesClosePress = () => {
        setIdadesVisible(false);
    }

    const onGeneroClosePress = () => {
        setGeneroVisible(false);
    }

    const onClosePress = () => {
        setModalVisible(false);
    };

    const onInscClosePress = () => {
        setInscVisible(false);
    };

    return (
        <View >
        <View style={styles.container}>
         
            <PerfilUsuario
            title="Usuário"
            onPerfilPress={() => {
                setModalVisible(true);
            }}

            onIdadesPress={onIdadesOpenPress}
            onIdadesClosePress={onIdadesClosePress}
            onIdadesAtual={idadesAtual}

            onGeneroPress={onGeneroOpenPress}
            onGeneroClosePress={onGeneroClosePress}
            onGeneroAtual={generoAtual}

            />
          
        </View>

<ListaAtividadesUsu 
  onInscPress={onInscOpenPress}
     

/>

<AddInscrições
isVisible={inscVisible}
onConfirm={onIdadesPress}
onCancel={onInscClosePress}
/>


         <View>

             <IdadeModal
             isVisible={idadesVisible}
             onConfirm={onIdadesPress}
             onCancel={onIdadesClosePress}
             />

             <GeneroModal
             isVisible={generoVisible}
             onConfirm={onGeneroPress}
             onCancel={onGeneroClosePress}
             />
         <UsuBtModal
         isVisible={modalVisible}
         onCancel={onClosePress}
         />
     </View>

     
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    cabeçalho: {
        //flex: 1,
    }
});

export default UsuarioAtividades
