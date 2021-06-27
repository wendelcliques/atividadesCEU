import React, {useState} from 'react'
import {Modal, View, Text, TouchableOpacity, TextInput } from 'react-native'

import {addAtividade} from '../../services/Atividades'

const AddAtividades = ({isVisible, onCancel}) => {
const atividade = {
    id: null,
    titulo: null,
    photo: null,
    agenda: null,
    
    professor: null,
    apresentador: null,
    descricao: null,
    vagas: 0,
    description: null,
    category: null,
};

const [modalVisible, setModalVisible] = useState(true);

const [titulo, setTitulo] = useState(atividade.titulo);
const [photo, setPhoto] = useState(atividade.photo);
const [agenda, setAgenda] = useState(atividade.agenda);
const [professor, setProfessor] = useState(atividade.professor);
const [apresentador, setApresentador] = useState(atividade.apresentador);
const [descricao, setDescricao] = useState(atividade.descricao);
const [vagas, setVagas] = useState(atividade.vagas);
const [description, setDescription] = useState(atividade.description);
const [category, setCategory] = useState(atividade.category);

const save = () => {
    const value = {
        vagas: parseFloat(vagas),
        description: description,
        category: category,

        titulo: titulo,
        photo: photo,
        agenda: agenda,
        professor: professor,
        apresentador: apresentador,
        descricao: descricao,
    };
    console.log('AdministradorAtividades :: save', value);

    addAtividade(value);
    //setModalVisible(false)
};



    return (
        <Modal 
        animationType='slide'
        transparent={true}
        visible={isVisible}
        
        onBackdropPress={onCancel}>
        <View>
            <Text>AddAtividades</Text>

            <TextInput
                 //style={styles.mask}
                 placeholder = "Digite o nome do produto"
                onChangeText={text => setDescription(text)}
                value={description}
                />

<TouchableOpacity onPress={
                    save()
                    }>
                     <Text 
                     //style={styles.sair}
                     >Salvar</Text>
                    </TouchableOpacity>
        </View>

        <View>
                    <TouchableOpacity onPress={
                    onCancel
                    }>
                     <Text 
                     //style={styles.sair}
                     >Sair</Text>
                    </TouchableOpacity>
                    </View>
        </Modal>
    )
}

export default AddAtividades
