import React, {useState} from 'react'
import {
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    StyleSheet
 } from 'react-native'

 import {signIn as login} from '../../services/Auth';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default SignIn
