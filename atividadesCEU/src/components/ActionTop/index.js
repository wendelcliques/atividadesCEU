import React from 'react'
import {StatusBar,
    View,
    Text, 
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

 import Colors from '../../styles/Colors';

const ActionTop = ({title, onGerenciamentoPress}) => {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.inner}>
                <TouchableOpacity style={styles.button} onPress={onGerenciamentoPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.green,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.green,
    },
});

export default ActionTop
