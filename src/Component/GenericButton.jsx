/* eslint-disable react/prop-types */
import React from "react";
import { TouchableOpacity, View,Text,StyleSheet } from "react-native";

export const GenericButton = (props) =>{
    const {handleSubmit,buttonText}  = props;
    return(
        
            <View style={styles.BoxStyle}>
            <TouchableOpacity onPress={() => handleSubmit()} style={[styles.button,{opacity:1}]}>
                <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
          </View>
        
    )
}

const styles= StyleSheet.create({
    BoxStyle:{
        marginVertical:5,
        backgroundColor:"white",
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        height:62,
        borderRadius:12,
        backgroundColor:"#F1544B",
        width:'100%'
    },
    buttonInactive:{
        justifyContent:"center",
        alignItems:"center",
        height:62,
        borderRadius:12,
        backgroundColor:"#E6E6E6", 
    },

    buttonText:{
        fontSize: 15, textAlign: "center", fontWeight: "600", color: "white"
    }
})