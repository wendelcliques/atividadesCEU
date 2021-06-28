import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const addAtividade = async value => {
    let data = {};

    const {titulo} = value;
    const {photo} = value;
    const {agenda} = value;
   
    const {professor} = value;
    const {apresentador} = value;
    const {descricao} = value;
    const {vagas} = value;
    const {description} = value;
    
    
    



  
  
    console.log('addAtividades :: value: ', JSON.stringify(value));
  
    try {
      data = {
        titulo: titulo,
        photo: photo,
        agenda: agenda,
        
        professor: professor,
        apresentador: apresentador,
        descricao: descricao,
        vagas: vagas,
        description: description,
        
       
        entryAt: new Date(),
        
        isInit: false,
        visibility: 'public',
    
      };
  
      await firestore()
        .collection('atividades')
        .add(data);
    } catch (error) {
      console.error(
        'addEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
      );
      Alert.alert('Erro', 'Houve um erro ao salvar esta atividade.');
    }
  
    return data;
  };

  export const updateAtividade = async value => {
   
  
    console.log('updateAtividade :: value: ', JSON.stringify(value));
    let data = {};
    const {id} = value;
    const {titulo} = value;
    const {photo} = value;
    const {agenda} = value;
   
    const {professor} = value;
    const {apresentador} = value;
    const {descricao} = value;
    const {vagas} = value;
    const {description} = value;
    
  
    

    try {
      data = {
        id: id,
        titulo: titulo,
        photo: photo,
        agenda: agenda,
        
        professor: professor,
        apresentador: apresentador,
        descricao: descricao,
        vagas: vagas,
        description: description,
        
       
       
        
        isInit: false,
        
      };

      console.log('updateAtividade :: data: ', JSON.stringify(data));
      
     await firestore()
        .collection('atividades')
        .doc(data.id)
        .update( data);
    } catch (error) {
 

      Alert.alert('Erro', 'Houve um erro ao atualizar este lançamento.');
    }
  
    return data;
  };

 /* console.error(
    'upEntry :: error on update object: ',
    JSON.stringify(data),
    
    JSON.stringify(error),
  );*/

  export const getAtividades = async (days, category) => {
    let querySnapshot;

    querySnapshot = await firestore()
    
      .collection('atividades')
     .where('visibility', '==', 'public')
      .orderBy('entryAt')
      .get();

      let atividades = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
      });
    
      if (category && category.id) {
        entries = entries.filter(entry => entry.category.id === category.id);
      }
    
      return atividades;
    };

    export const deleteAtividade = async value => {
      let data = {};
    const {id} = value;
   
      try {
          data = {
            id: id,
                       
          };
        await firestore()
        .collection('atividades')
        .doc(data.id)
        .delete();
    } catch (error) {

    }
      
  };