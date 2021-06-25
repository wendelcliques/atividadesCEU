import React, {useState, useEffect} from 'react'
import {Modal, View, Text, TouchableOpacity } from 'react-native'
import FormUsuInput from './FormUsuInput'

import useUsers from '../../hooks/useUsers'

import {getUser} from '../../services/Auth'

const FormUsuModal = ({route, navigation, isVisible, onCancel}) => {

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
   let user = {
       id: users.userId? users.userId: null,
       name: "teste",
       rg: users.rg? users.rg: null,
       responsavel: users.responsavel? users.responsavel: null,
   };

   const [, updateUser] = useUsers();

   const [name, setName] = useState(users.name);
   const [rg, setRg] = useState(users.rg);
   const [responsavel, setResponsavel] = useState(users.responsavel);

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
