import React from 'react'
import { View, Text } from 'react-native'

const UsuListItem = ({user}) => {
    return (
        <View>
            <Text>usulistitem {user.name}</Text>
        </View>
    )
}

export default UsuListItem;
