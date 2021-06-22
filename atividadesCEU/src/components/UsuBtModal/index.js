import React from 'react'
import {  Modal,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
 } from 'react-native';

import Colors from '../../styles/Colors'
import BtAddFormUsuario from '../../components/BtAddFormUsuário'
const UsuBtModal = ({isVisible, onCancel}) => {
    return (
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
        />

        <TouchableOpacity
                style={styles.modal}
                onPress={
                    onCancel
                }>
                <Text></Text>
                </TouchableOpacity>
        </Modal>
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
