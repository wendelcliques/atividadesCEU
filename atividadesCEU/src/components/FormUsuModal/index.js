import React, {useState} from 'react'
import {Modal, View, Text } from 'react-native'
import FormUsuInput from './FormUsuInput'

import useUsers from '../../hooks/useUsers'

const FormUsuModal = ({route, isVisible}) => {
   const user = 
   //route.params?.user? 
  // route.params.user   :
   {
       id: null,
       name: "teste",
       rg: null,
       responsavel: null,
   };

   const [, updateUser] = useUsers();

   const [name, setName] = useState(user.name);
   const [rg, setRg] = useState(user.rg);
   const [responsavel, setResponsavel] = useState(user.responsavel);

   const onUpdate = () => {
       const data ={
           id: user.id,
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
            onChangeText={setRg}
            value={rg}
            placeholder={"RG"}
            />
               <FormUsuInput 
            onChangeText={setResponsavel}
            value={responsavel}
            placeholder={"Responsável"}
            />
            <Text>FormUsuInput</Text>
        </View>
        </Modal>
    )
}

export default FormUsuModal
