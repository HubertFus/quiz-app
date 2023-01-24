import { View, Text, StyleSheet, Pressable } from "react-native";
import { Children, useState } from 'react';
interface Props{
  titles: Array<string>;
  style?: object;
  onChangeSelect?: (text:string)=> void;
}
function ButtonOutlineSelectGroup(props:Props):JSX.Element{
  const [pressedButton, setPressedButton] = useState<string>(props.titles[1])
  function onSelectChange(text:string):void{
    setPressedButton(text)
    props.onChangeSelect?props.onChangeSelect(text):null;
  }
  return <View style={styles.buttonContainer}>
    {props.titles.map((item:string)=>{
      return <Pressable key={item} style={[styles.borderButton,item===pressedButton?{backgroundColor:"#d6d6d6"}:null]} onPress={()=>{onSelectChange(item)}}>
        <Text style={[item===pressedButton?{color:"#3550DC"}:{color:"black"},{fontSize:19}]}>{item}</Text>
      </Pressable>
    })}
  </View>
}
export default ButtonOutlineSelectGroup;
const styles = StyleSheet.create({
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    
  },
  borderButton:{
    borderRadius:20,
    flexGrow:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:5,
    margin:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  }
})