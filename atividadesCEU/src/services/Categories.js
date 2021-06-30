/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

export const getDefaultCategories = () => {
return [
{
    id: '1',
    name: 'Masculino',
    isGenero: true,
    order: 0,
},
{
    id: '2',
    name: 'Feminino',
    isGenero: true,
    order: 1,
},
];
};

export const getAllCategories = async () => {
const querySnapshot = await firestore()
.collection('categories')
.orderBy('order')
.get();

const allCategories = querySnapshot.docs.map(documentSnapshot => {
    return {
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
    };
    });
    return allCategories;
};