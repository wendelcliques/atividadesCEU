import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import PerfilUsuario from '../../../components/PerfilUsuario'
import UsuBtModal from '../../../components/UsuBtModal'
import Colors from '../../../styles/Colors'
const UsuarioAtividades = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const onClosePress = () => {
        setModalVisible(false);
    };

    return (
        <View >
        <View style={styles.container}>
        <Text>Atividades</Text>
            <PerfilUsuario
            title="Usuário"
            onPerfilPress={() => {
                setModalVisible(true);
            }}
            />
          
        </View>
         <View>
         <UsuBtModal
         isVisible={modalVisible}
         onCancel={onClosePress}
         />
     </View>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //backgroundColor: Colors.background,
        paddingVertical: 10,
    },
});

export default UsuarioAtividades
