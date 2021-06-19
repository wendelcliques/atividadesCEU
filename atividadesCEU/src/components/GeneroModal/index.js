import React from 'react'
import {
    Modal,
      View,
      FlatList,
      TouchableOpacity,
       Text,
    StyleSheet,
} from 'react-native'

import Colors from '../../styles/Colors'

const GeneroModal = ({isVisible, onConfirm, onCancel}) => {
    const genero = ["Masculino" , "Feminino", ];
    return (
        <Modal
        animation="slide"
        transparent={false} 
        visible={isVisible} >
        <View style={styles.modal}>
            <FlatList
            data={genero}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
                <TouchableOpacity
                style={styles.modalItem}
                onPress={() => onConfirm(item)}
                >
                <Text style={styles.modalItemText}>
                     {item} 
                </Text>
                </TouchableOpacity>
            )}
            />
          
        </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    modalItem: {
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 2,
        marginHorizontal: 20,
        paddingVertical: 2,
        paddingHorizontal: 20,
    },
    modalItemText: {
        fontSize: 22,
        textAlign: 'center',
    }
    });

export default GeneroModal
