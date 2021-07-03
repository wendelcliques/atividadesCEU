/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { 
    View, 
    ScrollView,
    StyleSheet,
    Text } from 'react-native';

import GerenButtonModal from '../../../components/GerenButtonModal';
import AddAtividades from '../../../components/AddAtividades';
import ListaAtividades from '../../../components/ListaAtividades';

import UsuList from '../../../components/UsuList'
import { Colors } from 'react-native/Libraries/NewAppScreen';

    import ActionTop from '../../../components/ActionTop';
    import {setInitialized} from '../../../services/Welcome';

    import {addAtividade} from '../../../services/Atividades'   

const AdministradorAtividades = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [ativmodalVisible, setAtivmodalVisible] = useState(false);

    const onClosePress = () => {
        setModalVisible(false);
        setAtivmodalVisible(false);
    };

    const onSavePress = () => {
        save();
    }


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
    setAtivmodalVisible(false);
};

    return (
        <View>
        <View>
            <ActionTop
            title="Gerenciamento"
            onGerenciamentoPress={() => {
                setModalVisible(true);
            }}
            />

<ListaAtividades />
            
        </View>
        <View>
            <GerenButtonModal
            isVisible={modalVisible}
            onCancel={onClosePress}
            onAtividadePress={
                () => {
                    setAtivmodalVisible(true);
                }
            }
            />

            <AddAtividades 
            isVisible={ativmodalVisible}
            onCancel={onClosePress}
            onSave={onSavePress}

            onChangeDescriptionValue={setDescription}

            descriptionvalue={description}

            onChangeTituloValue=
            {setTitulo}

            titulovalue={titulo}

            onChangePhotoValue=
            {setPhoto}
            photovalue={photo} 

            onChangeAgendaValue=
            {setAgenda}
            agendavalue={agenda}
            
            onChangeProfessorValue=
            {setProfessor}
            professorvalue={professor}

            onChangeApresentadorValue=
            {setApresentador}
            apresentadorvalue={apresentador}

            onChangeDescricaoValue=
            {setDescricao}
            descricaovalue={descricao}
            
            onChangeVagasValue=
            {setVagas}
            vagasvalue={vagas}

            onChangeCategoryValue=
            {setCategory}
            categoryvalue={category}

            />
        </View>


        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
});

export default AdministradorAtividades
