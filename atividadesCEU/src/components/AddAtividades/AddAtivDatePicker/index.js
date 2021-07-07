/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import DateTimePickerModal from 'react-native-modal-datetime-picker';



const AddAtivDatePicker = ({value, onChange}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeValue = date => {
        onChange(date);
        onCancel();
    };

    const onCancel = () => {
        setModalVisible(false);
    }
    return (
        <View>
            <TouchableOpacity
            style={{
                width: 200,
                height: 59,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 2,

            }}
            >
            <Text>Agenda</Text>
            </TouchableOpacity>

            <DateTimePickerModal 
            mode='date'
            date={value}
            isVisible={modalVisible}
            onConfirm={onChangeValue}
            onCancel={onCancel}
            
            />

        </View>
    )
}

export default AddAtivDatePicker
