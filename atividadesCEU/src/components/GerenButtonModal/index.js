import React from 'react'
import { 
    Modal,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
 } from 'react-native';

 import Colors from '../../styles/Colors';

const GerenButtonModal = ({isVisible, onCancel}) => {
    return (
        <Modal 
        animationType='slide'
        transparent={true}
        visible={isVisible}
        
        onBackdropPress={onCancel}>
            <View>
                <TouchableOpacity onPress={
                    onCancel
                }>
                <Text>Usuários</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.modal}
                onPress={
                    onCancel
                }>
                <Text></Text>
                </TouchableOpacity>
                
             </View>
        </Modal>
       
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        //backgroundColor: Colors.background,
        marginVertical: 5,
        padding: 500,
    }
});
export default GerenButtonModal
