import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import loginAuth from './authenticationLogin'


const SignPage = () => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const onLoginPress=()=>{
        const login=loginAuth(username,password)
        console.warn(login)
    }
    const onForgetPress=()=>{
        console.warn('forget pressed')
    }
    const onGmailPress=()=>{
        console.warn('gmail pressed')
    }
    const onFacebookPress=()=>{
        console.warn('facebook pressed')
    }
    const onChangeUsername = (text) =>{
        setUsername(text)
    }
    const onChangePassword = (text) =>{
        setPassword(text)
    }
    
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Signbook</Text>
      <Text style={styles.subTextStyle}>Login in to Signbook</Text>
      <CustomInput placeholder="Username" onChangeInput={onChangeUsername}></CustomInput>
      <CustomInput placeholder="Password" onChangeInput={onChangePassword} secureTextEntry={true}></CustomInput>
      <CustomButton buttonText="Login" onButtonPress={onLoginPress} ></CustomButton>
      <CustomButton buttonText="Forget Password" onButtonPress={onForgetPress} ></CustomButton>
      <CustomButton buttonText="Login With Gmail" onButtonPress={onGmailPress} ></CustomButton>
      <CustomButton buttonText="Login With Facebook" onButtonPress={onFacebookPress} ></CustomButton>
    </View>
  )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    textStyle:{
        fontSize:40,
        marginVertical:30,
        color:'#1877F2',
        fontWeight:'bold'
    },
    subTextStyle:{
        fontSize:20,
        paddingBottom:18
    }
})
export default SignPage