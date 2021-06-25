import {Alert} from 'react-native'

import firestore from '@react-native-firebase/firestore'
import {getUserAuth} from './Auth'

export const getEntries = async () => {
    const userAuth = await getUserAuth();
    let querySnapshot;

    querySnapshot = await firestore()
    .collection('entries')
    .where('userId', '==', userAuth)
    .orderBy('entryAt')
    .get();

    let entries = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    return entries;
};

export const addEntry = async entry => {
    const userAuth = await getUserAuth();
    let data = {};

    try {
        data = {
            titulo: entry.titulo,
            photo: entry.photo,
            data: entry.data,
            entryAt: entry.entryAt || new Date(),
            professor: entry.professor,
            apresentador: entry.apresentador,
            descricao: entry.descricao,
            vagas: entry.vagas,
            description: entry.category.name,
            category: entry.category,
            userId: userAuth,


        };
        await firestore()
        .collection('entries')
        .add(data);

    } catch (error) {
        console.error('addEntry::erro', JSON.stringify(data), JSON.stringify(error),
        );
        Alert.alert('erro ao salvar')
    }
    return data
}





export const updateEntry = async entry => {
    const userAuth = await getUserAuth();
    let data = {};

    try {
        data = {
            titulo: entry.titulo,
            photo: entry.photo,
            data: entry.data,
            entryAt: entry.entryAt || new Date(),
            professor: entry.professor,
            apresentador: entry.apresentador,
            descricao: entry.descricao,
            vagas: entry.vagas,
            description: entry.category.name,
            category: entry.category,
            userId: userAuth,


        };
        await firestore()
        .collection('entries')
        .doc(entry.id)
        .update(data);

    } catch (error) {
        console.error('updateEntry::erro', JSON.stringify(data), JSON.stringify(error),
        );
        Alert.alert('erro ao atualizar')
    }
    return data
}


export const getEntries = async () => {
    const userAuth = await getUserAuth();
    let querySnapshot;

    querySnapshot = await firestore()
    .collection('entries')
    .where('userId', '==', userAuth)
    .orderBy('entryAt')
    .get();

    let entries = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    return entries;
};

export const deleteEntry = async entry => {
   

    try {
      
        await firestore()
        .collection('entries')
        .doc(entry.id)
        .delete();

    } catch (error) {
        console.error('deleteEntry::erro', JSON.stringify(data), JSON.stringify(error),
        );
        Alert.alert('erro ao apagar')
    }
   
}