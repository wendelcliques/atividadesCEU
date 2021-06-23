import firestore from '@react-native-firebase/firestore'
import {getUserAuth} from './Auth'

export const updateUser = async user => {

    const userAuth = await getUserAuth();
    let data = {};

    try {
        data = {
            
            userId: userAuth,
            name: user.name,
            rg: user.rg,
            responsavel: user.responsavel,
        }

        await firestore()
        .collection('users')
        .doc(userAuth)
        .update(data);
    } catch (error) {
        console.log( 'updateUser :: erro ao update', JSON.stringify(this.data))
    }

    return data;

};