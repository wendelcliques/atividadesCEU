import React, {useState} from 'react'

import {Modal, FlatList} from 'react-native'

import {useNavigation} from '@react-navigation/native'

// import UsuListItem from './UsuListItem'

import FormUsuModal from '../FormUsuModal'

import useUsers from '../../hooks/useUsers'

const UsuList = ({category}) => {
    const [modalvisible, setModalvisible] = useState(false);

    const onClosePress = () => {
        setModalvisible(false);

    }
    const navigation = useNavigation();
    const  [users] = useUsers();

    return (
<>
     
        <FlatList
        data={users}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => (
            <UsuListItem 
                user={item}

                onUserPress={user => {
                    setModalvisible(true);
                    <FormUsuModal 
                    user={user}

                    
        isVisible={modalvisible}
        onCancel={onClosePress}
        

                    />
                }}

            />
        )}
        />

            

        </>
    );

};

export default UsuList;