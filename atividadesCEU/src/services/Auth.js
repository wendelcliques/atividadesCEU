import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const isLogged = async () => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    console.log('isLogged :: value ', JSON.stringify(userAuth !== null));
    return userAuth !== null;
   
};

export const setUserAuth = async (uid) => {
    await AsyncStorage.setItem('userAuth', uid);
};

export const getUserAuth = async () => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    return userAuth;
};

export const cleanUserAuth = async () => {
    await AsyncStorage.removeItem('userAuth');
};

export const getUser = async () => {
    const userAuth = await getUserAuth();
    let querySnapshot;
querySnapshot = await firestore()
.collection('users')
.where('userId', '==', userAuth? userAuth : "null")
.orderBy('name')
.get();

let userAtual = querySnapshot.docs.map(documentSnapshot => {
return {...documentSnapshot.data(), id: documentSnapshot.id};
});

return userAtual;
};

export const signUp = async (data) => {
    const {email, password, name} = data

    try {
        const userInfos = await auth().createUserWithEmailAndPassword(
            email,
            password,
        );
        setUserAuth(userInfos.user.uid);

        await firestore()
        .collection('users')
        .doc(userInfos.user.uid)
        .set({
            name,
        })

        return {registerSuccess: true}

        
    }   catch (e) {
        Alert.alert('Erro ao criar usuário', e.message);
        return {registerSuccess: false}
    }
}

export const signIn = async (data) => {
    const {email, password} = data;

    try {
        const userInfos = await auth().signInWithEmailAndPassword(
            email,
            password,
        );

        setUserAuth(userInfos.user.uid);

        return {loginSuccess: true};
    } catch (e) {
        Alert.alert("Erro ao tentar entrar", e.message);
        return {loginSuccess: false}
    }
}