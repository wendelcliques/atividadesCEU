/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import moment from '../../../DateTimePtbr/moment';



const AddAtivDatePicker = ({value, onChange}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [modalVisibleSemanal, setModalVisibleSemanal] = useState(false);

    const [modalVisivel, setModalVisivel] = useState(false);

    const onChangeValue = date => {
        onChange(date);
        onCancel();
    };

    const onCancel = () => {
        setModalVisible(false);
        setModalVisibleSemanal(false);
        setModalVisivel(false);
    };

    const onVisible = () => {
        
        setModalVisivel(true)
    }

    const onTimeVisible = () => {
        setModalVisibleSemanal(true);
       
    }

    return (
        <View>
            <TouchableOpacity
          onPress={() => setModalVisible(true)}
            >
            <Text>Agenda Mensal</Text>
            <Text>{moment(value.toString()).calendar()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={() => onVisible()
        }
            >
            <Text>Agenda Semanal</Text>
            <Text>{}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
            isVisible={modalVisible}
            mode="datetime"
            date={value}
            
            onConfirm={onChangeValue}
            onCancel={onCancel}
            
            />
            <Modal
           animationType='slide'
           transparent={false}
           visible={modalVisivel} 
            
            >

                <Text>teste modal</Text>


                <TouchableOpacity
          onPress={() => onTimeVisible()
        }
            >
            <Text>OK</Text>
            
            </TouchableOpacity>

                <TouchableOpacity
          onPress={() => onCancel()
        }
            >
            <Text>CANCELAR</Text>
            
            </TouchableOpacity>


<DateTimePickerModal
            isVisible={modalVisibleSemanal}
            mode="time"
            date={value}
            
            onConfirm={onChangeValue}
            onCancel={onCancel}
            
            
            />

</Modal>

        </View>
    )
}

export default AddAtivDatePicker
