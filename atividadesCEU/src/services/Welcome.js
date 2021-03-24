import firestore from '@react-native-firebase/firestore';

import {getUserAuth} from './Auth';

export const isInitialized = async () => {
    const userAuth = await getUserAuth();
    let isAdmin = false;
    if (userAuth) {
        const userInfos = await firestore()
            .collection('users')
            .doc(userAuth)
            .get();
        isAdmin = userInfos.data().isAdmin;
    }

    return isAdmin !== null && isAdmin === true;
};

export const setInitialized = async () => {
    const userAuth = await getUserAuth();
    await firestore()
        .collection('users')
        .doc(userAuth)
        .set(
            {
                isAdmin: true,
            },
            {
                merge: true,
            },
        );
};

export const cleanInitialized = async () => {
    const userAuth = await getUserAuth();
    await firestore()
        .collection('users')
        .doc(userAuth)
        .set(
            {
                isAdmin: false,
            },
            {
                merge: true,
            },
        );
};