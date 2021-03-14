import React from 'react'
import { View, Text, styleSheets } from 'react-native'
import Colors from '../styles/Colors'

const Routes = () => {
    return (
        <View style={styles.container}>
            <Text>wendel</Text>
        </View>
    )
}

const styles = styleSheets.create({
    container: {
        flex: 1,
        bacgroundColor: Colors.background,
    }
});

export default Routes
