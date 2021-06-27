import React from 'react'
import { 
    Modal,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
 } from 'react-native';

 import Colors from '../../styles/Colors';

const GerenButtonModal = ({isVisible, onCancel, onAtividadePress}) => {

const addAtividades = () => {
    onAtividadePress
    
}

const onCancelar = () => {
    onCancel
}


    return (
        <Modal 
        animationType='slide'
        transparent={true}
        visible={isVisible}
        
        onBackdropPress={onCancel}>
            <View>
            <View style={styles.menulinha1}>
                    
                    <TouchableOpacity 
                    style={styles.botão}
                    onPress={
                    onCancel
                    }>
                    </TouchableOpacity>
                    

                    <View >
                    <TouchableOpacity 
                    style={styles.botão}
                    onPress={
                    onCancel
                    }>
                     <Text style={styles.botão2Text}>U</Text>
                    </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.menulinha1}>
                    
                    <TouchableOpacity 
                    style={styles.botão1}
                    onPress={
                    onCancel
                    }>
                    </TouchableOpacity>
                    

                    <View>
                    <TouchableOpacity onPress={
                    onCancel
                    }>
                     <Text style={styles.botão2Text}>Usuários</Text>
                    </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.menulinha1}>
                    
                    <TouchableOpacity 
                    style={styles.botão1}
                    onPress={
                    onCancel
                    }>
                    </TouchableOpacity>
                    

                    <View>
                    <TouchableOpacity onPress={
                    onAtividadePress   
                    
                    }>
                     <Text style={styles.botão2Text}>Add Atividades</Text>
                    </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.menulinha1}>
                    
                    <TouchableOpacity 
                    style={styles.botão1}
                    onPress={
                    onCancel
                    }>
                    </TouchableOpacity>
                    

                    <View>
                    <TouchableOpacity onPress={
                    onCancel
                    }>
                     <Text style={styles.sair}>Sair</Text>
                    </TouchableOpacity>
                    </View>
                </View>



                

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
    menulinha1: {
        //flex: 1,
        flexDirection: 'row',
    },
    botão: {
        //marginTop: 90,
        paddingTop: 90,
        flex: 2,
        //backgroundColor: Colors.black,
        justifyContent: 'center',
    },
    botão1: {
        //marginTop: 90,
        flex: 2,
        //backgroundColor: Colors.black,
        justifyContent: 'center',
    },
    botão2: {
        flex: 1,
        //marginTop: 90,
        backgroundColor: Colors.green,
        justifyContent: 'space-around',
    },
    botão3: {
        flex: 1,
        //marginTop: 90,
        backgroundColor: Colors.champagne,
        justifyContent: 'center',
    },
    botão2Text: {
        justifyContent: 'flex-end',
        fontSize: 18,
        color: Colors.black,
    },
    modal: {
        flex: 1,
       // backgroundColor: Colors.background,
        marginVertical: 5,
        padding: 500,
    },
    sair: {
        color: Colors.red,
        fontSize: 17,
    }
});


export default GerenButtonModal
