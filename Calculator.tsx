import React, { useState } from "react";

import { View,Text,StyleSheet,TextInput,Keyboard ,TouchableHighlight,useColorScheme,Dimensions} from "react-native";

const calculate = (input:String) => {
    const operators = ['+', '-', '*', '/'];
    const inputArray = input.split(' ');
    const num1 = Number.parseInt(inputArray[0]);
    const operator = inputArray[1];
    const num2 = Number.parseInt(inputArray[2]);
  
    if (isNaN(num1) && isNaN(num2)) {
        return 'Both INs';
      }

      if (isNaN(num1) ) {
        return 'invalid num1';
      }

      if (isNaN(num2) ) {
        return 'invalid num2';
      }

    if (isNaN(num1) || isNaN(num2)) {
      return 'Either Ins';
    }
  
    if (!operators.includes(operator)) {
      return 'Invalid operator';
    }
  
    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        if (num2 === 0) {
          return 'Cannot divide by zero';
        }
        return (num1 / num2).toString();
      default:
        return 'Invalid input';
    }
  };
  
  
function Calculator(){
const [val,setVal]=useState("")


    return(
        
        <View style={{flex:1}}>
            <View style={{flex:1}}>
            <TextInput style={style.textInput} onFocus={()=>Keyboard.dismiss()} onPress={()=>Keyboard.dismiss()
            } 
            value={String(val)}></TextInput>   
            </View>

            <View style={style.container}>
            <TouchableHighlight>
                <Text 
                onPress={()=>setVal('')}
                style={[style.button,style.topmost]}>
                    c
                </Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[style.button,style.topmost]}>DEL</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"%")}>
                <Text style={[style.button,style.topmost]}>%</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"/")}>
                <Text style={[style.button,style.operators]}>{String.fromCharCode(0xF7)}</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+="1")}>
                <Text style={[style.button,style.numbers] } >1</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+="2")}>
                <Text style={[style.button,style.numbers]} >2</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"3")}>
                <Text style={[style.button,style.numbers]} >3</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+="*")}>
                <Text style={[style.button,style.operators]} >{String.fromCharCode(0xD7)}</Text>
            </TouchableHighlight>   

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"4")}>
                <Text style={[style.button,style.numbers]} >4</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"5")}>
                <Text style={[style.button,style.numbers]} >5</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"6")}>
                <Text style={[style.button,style.numbers]} >6</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"-")}>
                <Text style={[style.button,style.operators]}>-</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"7")}>
                <Text style={[style.button,style.numbers]} >7</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"8")}>
                <Text style={[style.button,style.numbers]} >8</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"9")}>
                <Text style={[style.button,style.numbers]} >9</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text 
                onPress={()=>{setVal((prev)=>prev+"+")}}
                style={[style.button,style.operators]}
                >
                +</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>setVal((prev)=>prev+"0")}>
                <Text style={[style.button,style.numbers,style.zero]} >0</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[style.button]}
                onPress={()=>setVal((prev)=>prev+".")}
                >.</Text>
            </TouchableHighlight>

            <TouchableHighlight 
           
            onPress={()=>setVal(eval(val).toString())}
            >
                <Text 
                 style={[style.button,style.operators]}>=</Text>
            </TouchableHighlight>
         
            </View>
        </View>
    )
}
const screenWidth=Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const style = StyleSheet.create({
    textInput: {
        // fontStyle: 'italic',
        borderCurve: 'continuous',
        position:'absolute',
        elevation:5,
        cursor: 'pointer',
        fontFamily:'sans-serif-light',
        textAlign: 'right',
        fontSize: 60,
        zIndex:1,
        color: 'white',
        textAlignVertical:'bottom',
        fontWeight:'100',
        height: screenHeight*0.34,
        width:'100%',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'baseline',
        textShadowColor: 'red'
    },
    container:{
        display:'flex',
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'black',
        alignContent:'flex-end',
        // // main-axis alignment
        justifyContent:'space-evenly',

        // // cross-axis alignment
        alignItems:'center'
    },
    button: {
        // fontFamily:'monospace',
        // fontFamily:'Roboto',
        fontFamily:'sans-serif-light',
        backgroundColor: 'orange',
        borderColor:'black',
        color:'white',
        borderCurve: 'continuous',
        cursor: 'auto',
        borderWidth: 3,
        borderRadius: 50,
        textAlign: 'center',
        fontSize: 60,
        width:screenWidth*0.25,
        height:screenHeight*0.13,
        // padding: 1,
        fontWeight:'600',
        textAlignVertical:'center',
       
    },
    operators:{
        // backgroundColor: 'orange',

    },
    numbers:{
        fontSize:33,
        backgroundColor:'#323233',
        color:'white'
    },
      
    topmost:{
       backgroundColor:'#A4A5A4',
       color:'black',
       fontSize:35
    },
    zero:{
        width:180,
        color:'white',
        textAlign:'left',
        paddingLeft:40
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: '900'
    },
    whiteText: {
        color: 'white'
    },
    darkText: {
        color: 'black'
    }
})
export default Calculator;