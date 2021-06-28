import React, {useState} from 'react'
import {Modal, View, Text, TouchableOpacity, TextInput } from 'react-native'


const AddAtividades = ({isVisible, onCancel, onSave, onChangeDescriptionValue, 
    descriptionvalue,
    }) => {


    return (
        <Modal 
        animationType='slide'
        transparent={true}
        visible={isVisible}
        
        onBackdropPress={onCancel}>
        <View>
            <Text>AddAtividades</Text>

            <TextInput
                 //style={styles.mask}
                 placeholder = "Digite o nome do produto"
                onChangeText={text => onChangeDescriptionValue(text)}
                value={descriptionvalue}
                />

<TouchableOpacity onPress={
                    onSave
                    }>
                     <Text 
                     //style={styles.sair}
                     >Salvar</Text>
                    </TouchableOpacity>
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

export default AddAtividades
