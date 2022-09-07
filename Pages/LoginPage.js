import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const loginPage = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <Text style={styles.loginTextStyle}>Login Form</Text>
      <View>
        <Text style={styles.subContainerStyle}>Username :</Text>
        <TextInput style={styles.textInputStyle} placeholder='Enter Your Name'></TextInput>
      </View>
      <View>
        <Text style={styles.subContainerStyle}>Password :</Text>
        <TextInput style={styles.textInputStyle} placeholder='Enter Your Password' secureTextEntry={true}></TextInput>
      </View>
      <View style={styles.buttonViewStyle}>
      <TouchableOpacity style={styles.loginbuttonStyle}>
        <Text style={styles.buttonStyle}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainerStyle: {
    // height:'100%',
    paddingHorizontal: 25,
    // paddingTop:100,
    // backgroundColor:'#bff5f2',
    width: "100%",
    flex: 1,
    marginTop: 150,
  },
  loginTextStyle: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 40,
    textAlign: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 1,
    fontSize: 18,
    // width:'180%'
  },
  subContainerStyle: {
    paddingTop: 30,
    fontSize: 18,
  },
  sub1ContainerStyle: {
    fontSize: 18,
    lineHeight: 25,
    marginTop: 10,
    marginBottom: 5,
    color: "#7d7d7d",
  },
  buttonStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    backgroundColor: "black",
    
  },
  loginbuttonStyle: {
    width: 100,
    marginTop: 50,
  },
  buttonViewStyle:{
    paddingHorizontal:120

  }
});

export default loginPage;
