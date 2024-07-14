import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        height:53,
        width:'90%',
        marginTop:15,
        marginLeft:20,
        marginBottom:10,
        borderWidth:1,
        padding:15,
        borderColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemleft:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap'
    },
    square:{
        backgroundColor:'#55BCF666',
        height:24,
        width:24,
        borderRadius:5,
        opacity:0.8,
        marginRight:15
    },
    itemText:{
        maxWidth:'80%'
    },
    circular:{
        // height:'80%',
        // width:'5%',
        height:12,
        width:12,
        borderRadius:5,
        borderWidth:2,
        backgroundColor:'#55BCF6',
        borderColor:'#FFFFFF'
    }
})