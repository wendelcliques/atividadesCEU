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
              setTitulo(item.titulo);
              setPhoto(item.photo);
              setAgenda(item.agenda);
              setProfessor(item.setProfessor);
              setApresentador(item.apresentador);
              setDescricao(item.descricao);
              setVagas(item.vagas);

              setDescription(item.description);
              setCategory(item.category);

              onChangePress(item);

              console.log('ListaProduto :: Flatlist onpress', item);
            }}>
            <View
            // style={styles.containerListaProdutos}
            >
              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.titulo}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.photo}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.agenda}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.professor}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.apresentador}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.descricao}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.vagas}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.description}</Text>
              </View>

              <View
              // style={styles.containerListaProdutosDescription}
              >
                <Text>- {item.category}</Text>
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
            placeholder="Título"
            onChangeText={text => setTitulo(text)}
            value={titulo}
          />


<TextInput
            //style={styles.mask}
            placeholder="Foto"
            onChangeText={text => setPhoto(text)}
            value={photo}
          />

<TextInput
            //style={styles.mask}
            placeholder="Data e Horário"
            onChangeText={text => setAgenda(text)}
            value={agenda}
          />

<TextInput
            //style={styles.mask}
            placeholder="Professor"
            onChangeText={text => setProfessor(text)}
            value={professor}
          />

<TextInput
            //style={styles.mask}
            placeholder="Apresentador"
            onChangeText={text => setApresentador(text)}
            value={apresentador}
          />

<TextInput
            //style={styles.mask}
            placeholder="Descrição"
            onChangeText={text => setDescricao(text)}
            value={descricao}
          />

<TextInput
            //style={styles.mask}
            placeholder="Vagas"
            onChangeText={text => setVagas(text)}
            value={vagas}
          />

<TextInput
            //style={styles.mask}
            placeholder="Description"
            onChangeText={text => setDescription(text)}
            value={description}
          />

<TextInput
            //style={styles.mask}
            placeholder="Categoria"
            onChangeText={text => setCategory(text)}
            value={category}
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
