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
          onPress={() => setModalVisible(true)}
            >
            <Text>Agenda</Text>
            <Text>{value.toString()}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
            isVisible={modalVisible}
            mode="datetime"
            date={value}
            
            onConfirm={onChangeValue}
            onCancel={onCancel}
            
            />

        </View>
    )
}

export default AddAtivDatePicker
