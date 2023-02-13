import { Pressable, Text, StyleSheet, TextProps } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../../App";
import { RFValue } from "../../screens/GameScreen";

function CategoryTile({item}:any):JSX.Element{
    const { navigate } = useNavigation<StackNavigation>()
    const [pressed, setPressed] = useState<boolean>(false)

    return <Pressable style={[styles.categoryTileContainer,pressed && styles.pressedTile]} 
    onPressIn={()=>{setPressed(true)}} 
    onPressOut={()=>{setPressed(false);navigate("GameMode",item)}}>
        <Ionicons name={pressed?item.iconPressed:item.icon} size={30} color="#3550DC" />
        <Text style={[styles.categoryTileTitle,{color:pressed?"#3550DC":"gray"}]}>{item.name}</Text>
    </Pressable>
}
export default CategoryTile
const styles = StyleSheet.create({
    categoryTileContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        backgroundColor:"white",
        borderRadius:20,
        margin:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    categoryTileTitle:{
        textAlign:"center",
        margin:10,
        color:"red",
        fontSize:RFValue(16)
    },
    pressedTile:{
        backgroundColor:"#d6d6d6"
    }
})