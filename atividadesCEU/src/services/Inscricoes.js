import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const addInscricao = async value => {
    let data = {};

    
    
    
    const {category} = value; //barraca
    const {situation} = value; //situação (carrinho, confirmado, pronto, entregue)
    const {user} = value; //usuário


    const {titulo} = value;
    const {photo} = value;
    const {agenda} = value;
   
    const {professor} = value;
    const {apresentador} = value;
    const {descricao} = value; // produto
    const {vagas} = value; 
    
    const {titulo} = value;
  
    console.log('addInscricao :: value: ', JSON.stringify(value));
  
    try {
      data = {
        titulo: titulo,
        photo: photo,
        agenda: agenda,
        
        professor: professor,
        apresentador: apresentador,
        descricao: descricao,
        vagas: vagas,        
        category: category,
        
    
        situation: situation,
        user: user,
        entryAt: new Date(),
        
        isInit: false,
        visibility: 'public',
    
      };
  
      await firestore()
        .collection('inscricoes')
        .add(data);
    } catch (error) {
      console.error(
        'addEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
      );
      Alert.alert('Erro', 'Houve um erro ao salvar esta inscrição.');
    }
  
    return data;
  };

  export const updateInscricao = async value => {
   
  
    console.log('updateInscricao :: value: ', JSON.stringify(value));
    let data = {};
    const {id} = value;
    
    
    const {category} = value;
    const {situation} = value;
    const {isInit} = value;

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
        category: category,        
        situation: situation,
        
        
        isInit: isInit,
        visibility: 'public',
        
      };

      console.log('updateInscricao :: data: ', JSON.stringify(data));
      
     await firestore()
     .collection('inscricoes')
        .doc(data.id)
        .update( data);
    } catch (error) {
 

      console.error(
        'upEntry :: error on update object: ',
      
        'upEntry :: value.id: ',
        JSON.stringify(entry),
       
      );
      Alert.alert('Erro', 'Houve um erro ao atualizar este lançamento.');
    }
  
    return data;
  };

 /* console.error(
    'upEntry :: error on update object: ',
    JSON.stringify(data),
    
    JSON.stringify(error),
  );*/

  export const getInscricoes = async (days, category) => {
    let querySnapshot;

    querySnapshot = await firestore()
    .collection('inscricoes')
    .where('visibility', '==', 'public')
      .orderBy('entryAt')
      .get();

      let inscricoes = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
      });
    
      if (category && category.id) {
        entries = entries.filter(entry => entry.category.id === category.id);
      }
    
      return inscricoes;
    };


    export const getInscricoesPedido = async value => {
      let querySnapshot;
  
      querySnapshot = await firestore()
      .collection('inscricoes')
      .where('visibility', '==', 'public')
      .where('isInit', '==', true)
        .orderBy('entryAt')
        .get();
  
        let inscricoes = querySnapshot.docs.map(documentSnapshot => {
          return {...documentSnapshot.data(), id: documentSnapshot.id};
        });
      
      
        console.log('getOrdersPedido :: data: ', JSON.stringify(entries));
        return inscricoes;

        
   
      };



    export const deleteInscricao = async value => {
      let data = {};
    const {id} = value;
   
      try {
          data = {
            id: id,
                       
          };
        await firestore()
        .collection('inscricoes')
        .doc(data.id)
        .delete();
    } catch (error) {

    }
      
  };