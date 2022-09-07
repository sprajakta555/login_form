import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({placeholder,secureTextEntry, onChangeInput}) => {
  return (
    <TextInput onChangeText={onChangeInput} secureTextEntry={secureTextEntry} style={styles.input} placeholder={placeholder}></TextInput>
  )
}

const styles=StyleSheet.create({
    input:{
        width:'100%',
        padding:15,
        backgroundColor:'#edeceb',
        margin:10,
        borderRadius:10,
        borderColor:'#4d483f',
        borderWidth:1
        
    }
})

export default CustomInput