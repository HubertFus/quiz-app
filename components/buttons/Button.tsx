import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
type props = {
    text:string,
    onPress?: ()=>void;
}   
function Button(props:props):JSX.Element{
    const [pressed, setPressed] = useState<boolean>(false)
    return <Pressable style={[styles.buttonContainer,pressed?{backgroundColor:"#d6d6d6"}:null]} onPressIn={()=>{setPressed(true)}} onPressOut={()=>{setPressed(false)}} onPress={props.onPress}>
        <Text style={[pressed?{color:"#3550DC"}:{color:"gray"},{fontWeight:"700",fontSize:23}]}>{props.text.toLocaleUpperCase()}</Text>
    </Pressable>
}
export default Button;
const styles = StyleSheet.create({
    buttonContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:40,
        paddingVertical:10,
        backgroundColor:"white",
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    }
})