import React, { useState } from "react";
import { View, Text,StyleSheet,KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import {Roboto} from './assets/Roboto/*'
import Task from "./components/Task";

export default function Main(){
    const [task,setTask]=useState();
    const [taskItems,settaskItems]=useState([])

    const handleAddTask=()=>{
        Keyboard.dismiss()
        settaskItems([...taskItems,task])
        setTask(null)
        console.log(task);
    }

    const completeTask=()=>{
        let itemsCopy=[...taskItems]
        itemsCopy.splice(index,1)
        settaskItems(itemsCopy)
    }
    return(
        <View style={styles.container}>
            <View style={styles.todaystasks}>
           <Text style={styles.heading}>Today's tasks</Text>
            </View>
            <View style={styles.items}>
                {
                    taskItems.map((item,index)=>{
                        return(
                            <><TouchableOpacity key={index}  onPress={(index) => completeTask(index)}>
                                <Task text={item} />
                              </TouchableOpacity></>

                        )
                    })
                }
                {/* <Task text={'task1'}/>
                <Task text={'task2'}/>
                <Task text={'task3'}/> */}
            </View>
            <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder="Write a task"
                 onChangeText={(text)=>setTask(text)}
                 value={task}></TextInput>
                <TouchableOpacity onPress={()=>handleAddTask}>
                    <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E8EAED'
    },
    heading:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'Roboto-Regular',
        
        paddingLeft:20,
        // paddingTop:,
        color:'black'
    },
    todaystasks:{
        paddingTop:80,
        paddingHorizontal:20
    },
    items:{
        marginTop:30
    },
    writeTaskWrapper:{
        position:'absolute',
        bottom:60,
        height:45,
        width:'100%',
        flexDirection:'row',
        borderRadius:60,
        justifyContent:'space-around',
        alignItems:'center'
    },
    input:{
        borderColor:'#C0C0C0',
        // borderWidth:1,
        height:45,
        width:'90%',
        paddingVertical:15,
        paddingHorizontal:15,
        maxWidth:300,
        alignItems:'center',
        borderRadius:60,
        flexWrap:'wrap',
        backgroundColor:'#FFFFFF',
        
    },
    addWrapper:{
        height:60,
        width:60,
        backgroundColor:'#FFFFFF',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C0C0C0',
        // borderWidth:1,
    },
    addButton:{
        height:32,
        width:32,
        fontSize:35
    },
    addText:{

    }
})