import React from 'react'
import { 
    View, 
    ScrollView,
    StyleSheet,
    Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

    import ActionTop from '../../../components/ActionTop';

const AdministradorGerenciamento = () => {
    return (
        <View>
            <ActionTop
            title="Gerenciamento"
            onGerenciamentoPress={() => {

            }}
            />
            <Text>Gerenciamento</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
});

export default AdministradorGerenciamento
