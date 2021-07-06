/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {Modal, View, Text, TouchableOpacity, TextInput } from 'react-native'

const AddInscrições = (
    {isVisible, 
    onCancel, 
    onSave,
    }
) => {
    return (
        <Modal 
        animationType='slide'
        transparent={false}
        visible={isVisible}
        
        onBackdropPress={onCancel}>

        <View>
            <Text>Add Inscrição</Text>
        </View>

        <View>
                    <TouchableOpacity onPress={
                    onCancel
                    }>
                     <Text 
                     //style={styles.sair}
                     >Sair</Text>
                    </TouchableOpacity>
                    </View>
        </Modal>
    )
}

export default AddInscrições
