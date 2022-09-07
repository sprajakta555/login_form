import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText,onButtonPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    buttonStyle:{
        backgroundColor:'#1877F2',
        width:'100%',
        borderRadius:10,
        marginVertical:10
    },
    buttonText:{
        color:'white',
        padding:15,
        textAlign:'center'
    
        
    }

})

export default CustomButton