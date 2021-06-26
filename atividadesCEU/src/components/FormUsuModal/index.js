import React, {useState, useEffect} from 'react'
import {Modal, View, Text, TouchableOpacity } from 'react-native'
import FormUsuInput from './FormUsuInput'

import useUsers from '../../hooks/useUsers'

import {getUser} from '../../services/Auth'

const FormUsuModal = ({route, navigation, isVisible, onCancel, user}) => {

   let [users, setUsers] = useState([]);
 useEffect(() => {
     async function loadUsers() {
         const data = await getUser();
setUsers(data);
     }
     loadUsers();
     console.log("users:: useeffect", JSON.stringify(users))
 }, []) ;  

    const userAuth = userAuth;
   let userr = {
       id: user.userId? user.userId: null,
       name: "teste",
       rg: user.rg? user.rg: null,
       responsavel: user.responsavel? user.responsavel: null,
   };

   const [, updateUser] = useUsers();

   const [name, setName] = useState(userr.name);
   const [rg, setRg] = useState(userr.rg);
   const [responsavel, setResponsavel] = useState(userr.responsavel);

   console.log("users:: name", JSON.stringify(name))

   const onUpdate = () => {
       const data ={
           id: user.userId,
           name: user.name,
           rg: user.rg,
           responsavel: user.responsavel,
       }

       console.log('FormUsuModal:: update', data);
       updateUser(data);
       onClose();
   };

const onClose = () => {

}


    return (
        <Modal
        animation="slide"
        transparent={false} 
        visible={isVisible}>
        <View>

            <FormUsuInput 
            onChangeText={setName}
            value={name}
            placeholder={"Nome"}
            />
              <FormUsuInput 
           // onChangeText={setRg}
            //value={rg}
            placeholder={"RG"}
            />
               <FormUsuInput 
           // onChangeText={setResponsavel}
           // value={responsavel}
            placeholder={"Responsável"}
            />
            <Text>FormUsuInput</Text>
        </View>

        <TouchableOpacity 
        onPress={ onCancel}
        >
            <Text>sair</Text>
        </TouchableOpacity>
        </Modal>
    )
}

export default FormUsuModal
