/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import {getAtividades} from '../../services/Atividades';
import {updateAtividade} from '../../services/Atividades';
import {deleteAtividade} from '../../services/Atividades';



const ListaAtividades = () => {

  
  
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

  const [id, setId] = useState(atividade.id);

  const [titulo, setTitulo] = useState(atividade.titulo);
  const [photo, setPhoto] = useState(atividade.photo);
  const [agenda, setAgenda] = useState(atividade.agenda);
  const [professor, setProfessor] = useState(atividade.professor);
  const [apresentador, setApresentador] = useState(atividade.apresentador);
  const [descricao, setDescricao] = useState(atividade.descricao);
  const [vagas, setVagas] = useState(atividade.vagas);
  const [description, setDescription] = useState(atividade.description);
  const [category, setCategory] = useState(atividade.category);
  const [userId, setUserId] = useState(atividade.userId);

  const [atividades, setAtividades] = useState([]);
  const [produto, setProduto] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const onChangePress = item => {
    setProduto(item);

    console.log('ListaProduto :: onChangePress', item);
  };

  useEffect(() => {
    async function loadAtividades() {
      const data = await getAtividades();
      setAtividades(data);
    }

    loadAtividades();

    console.log('AtividadeList :: useEffect');
  }, [atividades]);

  const update = () => {
    const value = {
      id: id,
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

    console.log('ListaProduto :: botão atualizar', value);
    console.log('ListaProduto :: update.description', value);

    updateAtividade(value);
    onClosePress();
  };

  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Você deseja realmente apagar esse produto?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  };
  const onOkPress = () => {
    const value = {
      id: id,
    };
    deleteAtividade(value);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <FlatList
        //horizontal={true}
        data={atividades}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setId(item.id);
              //setPrice(item.price)

              setDescription(item.description);
              //setCategory(item.category)
              onChangePress(item);

              console.log('ListaProduto :: Flatlist onpress', item);
            }}>
            <View
            // style={styles.containerListaProdutos}
            >
              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        //style={styles.container}
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <View
        //style={styles.modalAdmProd}
        >
          <TextInput
            //style={styles.mask}
            placeholder="Produto"
            onChangeText={text => setDescription(text)}
            value={description}
          />

          <TouchableOpacity
            // style={styles.modalAdmProdCloseButton}
            onPress={() => {
              onClosePress();
            }}>
            <Text
            // style={styles.modalAdmProdCloseButtonText}
            >
              Fechar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            //style={styles.modalAdmProdCloseButton}
            onPress={() => {
              update();
            }}>
            <Text
            //style={styles.modalAdmProdCloseButtonText}
            >
              Atualizar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            //style={styles.modalAdmProdCloseButton}
            onPress={() => {
              onDelete();
            }}>
            <Text
            //style={styles.modalAdmProdCloseButtonText}
            >
              Apagar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ListaAtividades;
