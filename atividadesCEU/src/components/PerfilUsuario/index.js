import React from 'react'
import {StatusBar,
    View,
    Text, 
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

 import Colors from '../../styles/Colors';

const PerfilUsuario = (
    {title, 
        onPerfilPress,
         onIdadesPress,
          onIdadesAtual,
          onGeneroPress,
          onGeneroClosePress,
          onGeneroAtual,}) => {
    return (
        <View style={{
            
            flexDirection: 'row',
            //paddingLeft: 20,
        }}>

<View>

<View style={{
    
    flexDirection: 'row',
    paddingLeft: 20,
}}>
    <TouchableOpacity
    onPress={() => {}} >
<Text style={{
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
}}

> Cursos</Text>

    </TouchableOpacity>
    <TouchableOpacity
    
    onPress={() => {}} 
    >
<Text
 style={{
     
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 5,
    marginRight: 70,
}}
> Apresetações</Text>

    </TouchableOpacity>

</View>




<View style={{
    
    flexDirection: 'row',
    paddingLeft: 20,
}}>
    <TouchableOpacity
    onPress={() => {}} >
<Text style={{
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
}}

> Transformar em flat list horizontal</Text>

    </TouchableOpacity>
    
    
</View>


<View style={{
    
    flexDirection: 'row',
    paddingLeft: 20,
}}>
    <TouchableOpacity
    onPress={() => {
        onIdadesPress();
    }} >
<Text style={{
    width: 107,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
}}

> {onIdadesAtual} </Text>

    </TouchableOpacity>
    <TouchableOpacity
    
    onPress={() => {
        onGeneroPress();
    }} 
    >
<Text
 style={{
     width: 107,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 5,
    marginRight: 70,
}}
>{onGeneroAtual}</Text>

    </TouchableOpacity>

</View>

</View>

            <View style={StyleSheet.inner}>
                <View>
            <TouchableOpacity style={styles.button} onPress={onPerfilPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
                </View>
               
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
        backgroundColor: "red",
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