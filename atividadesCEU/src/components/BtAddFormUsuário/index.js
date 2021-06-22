import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const BtAddFormUsuario = ({onAddFormUsuPress, title}) => {
    return (
        <View 
        //style={StyleSheet.inner}
        >
        <View>
    <TouchableOpacity 
    //style={styles.button} 
    onPress={onAddFormUsuPress}>
            <Text 
            //style={styles.buttonText}
            >{title}</Text>
        </TouchableOpacity>
        </View>
       
    </View>
    )
}

export default BtAddFormUsuario
