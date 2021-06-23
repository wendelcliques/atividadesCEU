import React, {useState} from 'react'
import {  Modal,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
 } from 'react-native';

import Colors from '../../styles/Colors'
import BtAddFormUsuario from '../../components/BtAddFormUsuário'
import FormUsuModal from '../FormUsuModal'

const UsuBtModal = ({isVisible, onCancel}) => {
    const [modalvisible, setModalvisible] = useState(false);
    return (
        <>
        <Modal 
        animationType='slide'
        transparent={true}
        visible={isVisible}
        
        onBackdropPress={onCancel}>
        <View>
            <Text>Perfil Modal</Text>
        </View>
        <BtAddFormUsuario 
        title={"ADD"}
        onPress={
            () => {
                setModalvisible(true);
            }
        }
        />

        <TouchableOpacity
                style={styles.modal}
                onPress={
                    onCancel
                }>
                <Text></Text>
                </TouchableOpacity>
        </Modal>
        <FormUsuModal 
        isVisible={modalvisible}
        />
        </>
    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
       // backgroundColor: Colors.background,
        marginVertical: 5,
        padding: 500,
    },
});

export default UsuBtModal
