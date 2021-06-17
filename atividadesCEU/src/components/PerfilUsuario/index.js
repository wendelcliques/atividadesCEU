import React from 'react'
import {StatusBar,
    View,
    Text, 
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

 import Colors from '../../styles/Colors';

const PerfilUsuario = ({title, onPerfilPress}) => {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.container}>
            <TouchableOpacity style={styles.button} onPress={onPerfilPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={onPerfilPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       // backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    margem: {
        flex: 1,
        backgroundColor: 'red',
    },
    button: {
        borderRadius: 50,
        borderWidth: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.green,
        paddingVertical: 5,
        paddingHorizontal: 10,
        //marginTop: -2,
        width: 80,
        height: 80,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
       
        color: Colors.green,
    },
});

export default PerfilUsuario