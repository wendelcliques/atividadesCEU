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

const IdadeModal = ({isVisible, onConfirm, onCancel}) => {

    const idades = ["1 ano" , "2 anos", "3 anos", "4 anos","5 anos", "6 anos", "7 anos", "8 anos", "9 anos", "10 anos",
    "11 anos", "12 anos", "13 anos", "14 anos", "15 anos", "16 anos", "17 anos", "18 anos",
                    '+18 anos',];
    return (
        <Modal
        animation="slide"
        transparent={false} 
        visible={isVisible} >
        <View style={styles.modal}>
            <FlatList
            data={idades}
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

export default IdadeModal
