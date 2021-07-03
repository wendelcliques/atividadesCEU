/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {Modal, View, Text, TouchableOpacity, TextInput } from 'react-native'


const AddAtividades = ({
    isVisible, 
    onCancel, 
    onSave, 

    onChangeDescriptionValue, 
    descriptionvalue,

    onChangeTituloValue,
titulovalue,

            onChangePhotoValue,
            photovalue,

            onChangeAgendaValue,
            agendavalue,
            
            onChangeProfessorValue,
            professorvalue,

            onChangeApresentadorValue,
            apresentadorvalue,

            onChangeDescricaoValue,
            descricaovalue,
            
            onChangeVagasValue,
            vagasvalue,

            onChangeCategoryValue,
            categoryvalue,


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


<TextInput
                 //style={styles.mask}
                 placeholder = "Digite o título da atividade"
                onChangeText={text => onChangeTituloValue(text)}
                value={titulovalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Selecione a foto da atividade"
                onChangeText={text => onChangePhotoValue(text)}
                value={photovalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Selecione a data da atividade"
                onChangeText={text => onChangeAgendaValue(text)}
                value={agendavalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Selecione o professor"
                onChangeText={text => onChangeProfessorValue(text)}
                value={professorvalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Selecione o apresentador"
                onChangeText={text => onChangeApresentadorValue(text)}
                value={apresentadorvalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Digite a descrição da atividade"
                onChangeText={text => onChangeDescricaoValue(text)}
                value={descricaovalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Digite o numero de vagas da atividade"
                onChangeText={text => onChangeVagasValue(text)}
                value={vagasvalue}
                />


<TextInput
                 //style={styles.mask}
                 placeholder = "Digite a categoria da atividade"
                onChangeText={text => onChangeCategoryValue(text)}
                value={categoryvalue}
                />


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
