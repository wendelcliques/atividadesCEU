import React, {useState} from 'react'
import { 
    View, 
    ScrollView,
    StyleSheet,
    Text } from 'react-native';

import GerenButtonModal from '../../../components/GerenButtonModal';
import { Colors } from 'react-native/Libraries/NewAppScreen';

    import ActionTop from '../../../components/ActionTop';
    import {setInitialized} from '../../../services/Welcome';

const AdministradorAtividades = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const onClosePress = () => {
        setModalVisible(false);
    };

    return (
        <View>
        <View>
            <ActionTop
            title="Gerenciamento"
            onGerenciamentoPress={() => {
                setModalVisible(true);
            }}
            />


            
        </View>
        <View>
            <GerenButtonModal
            isVisible={modalVisible}
            onCancel={onClosePress}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
});

export default AdministradorAtividades
