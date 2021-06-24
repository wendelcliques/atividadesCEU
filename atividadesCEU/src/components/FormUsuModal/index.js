import React, {useState, useEffect} from 'react'
import {Modal, View, Text, TouchableOpacity } from 'react-native'
import FormUsuInput from './FormUsuInput'

import useUsers from '../../hooks/useUsers'

import getUser from '../../services/Auth'

const FormUsuModal = ({route, navigation, isVisible, onCancel}) => {

   let [users, setUsers] = useState([]);
 useEffect(() => {
     async function loadUsers() {
         const data = await getUser();
setUsers(data);
     }
     loadUsers();
     console.log("users:: useeffect", JSON.stringify(data))
 }, []) ;  

    const userAuth = userAuth;
   const user = 
  // route.params?.users? 
  // route.params.users:
   {
       id: null,
       name: null,
       rg: null,
       responsavel: null,
   };

   const [, updateUser] = useUsers();

   const [name, setName] = useState(users.name);
   //const [rg, setRg] = useState(users.rg);
   //const [responsavel, setResponsavel] = useState(users.responsavel);

   const onUpdate = () => {
       const data ={
          // id: users.id,
           name: users.name,
           //rg: users.rg,
           //responsavel: users.responsavel,
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
