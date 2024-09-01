/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, TextInput,View,Text} from "react-native";

export const GenericInputBox = (props) =>{

    const {
        placeholder,
        isSecureTextEntry,
        value,
        handleBlur,
        handleChange,
        error,
        touched
    } = props

    const renderErrors = (error, touched) => {
        return (
          error && touched ? 
          <View style={{ marginTop: 5, marginLeft: 0, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={{ color: "#E64C4C", marginLeft: '-48%' }}>{error}</Text>
          </View>  
          : 
          null
        );
      }
      
 return(
    <View style={styles.inputFieldStyle}>
        <TextInput 
            placeholder={placeholder}
            secureTextEntry={isSecureTextEntry} 
            value={value}
            onBlur={handleBlur()}
            onChangeText={handleChange()}
            style={styles.InputFieldTextStyle}
        />
        {renderErrors(error, touched)}
    </View>
 )   
}
const styles=StyleSheet.create({
    inputFieldStyle:{
        marginVertical:8,
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:'center'
      },
      InputFieldTextStyle:{
        textAlign:"left",
        height:52,
        fontSize:15,
        fontWeight:"500",
        color:"black",
        borderRadius:12,
        borderWidth:1,
        marginHorizontal:5,
        borderColor:"lightgrey",
        padding:10,
        width:'100%'
      },
})