import React from 'react'
import { View, Text, TextInput } from 'react-native'

const FormUsuInput = ({onChangeText, value, placeholder }) => {
    return (
        <View>
            <TextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            
            />
                
            
        </View>
    )
}

export default FormUsuInput
