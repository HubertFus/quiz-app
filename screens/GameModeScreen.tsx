import { View, Text, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import ButtonOutlineSelectGroup from "../components/buttons/ButtonOutlineSelectGroup";
import { Ionicons } from '@expo/vector-icons'; 
import Button from "../components/buttons/Button";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../App";
function GameModeScreen({route}:any):JSX.Element{
    const { navigate } = useNavigation<StackNavigation>()
    const [ api, setApi ] = useState<{difficulty?: string, category?: string | null, quantity?: string}>();
    useEffect(():void=>{
        let prev = {...api}
        prev.category = route.params.id;
        prev.difficulty = titles[1].toLowerCase();
        prev.quantity = "5";
        setApi(prev);
    },[])
    const titles = ["Easy","Medium","Hard"]
    const quantity = ["1","5","10"]
    function selectDifficultyHandler(text:string):void{
        let prev = {...api}
        prev.difficulty  =text.toLowerCase();
        setApi(prev);
    }
    function selectQuantityHandler(text:string):void{
        let prev = {...api}
        prev.quantity  =text.toLowerCase();
        setApi(prev);
    }
    function onSumbit():void{
        const url = `https://opentdb.com/api.php?amount=${api?.quantity}${api?.category?`&category=${api?.category}`:""}&difficulty=${api?.difficulty}&type=multiple&encode=base64`;
        navigate("Game",{url:url})
    }
    return <View style={styles.BodyContainer}>
        <Ionicons name={route.params.icon} color="white" size={100}/>
        <View style={styles.mainContainer}>
            <View style={styles.buttonContainer}>
                <Text style={styles.title}>Select Difficulty</Text>
                <ButtonOutlineSelectGroup titles={titles} onChangeSelect={selectDifficultyHandler}/>
                <Text style={styles.title}>Number of Questions</Text>
                <ButtonOutlineSelectGroup titles={quantity} onChangeSelect={selectQuantityHandler}/>
            </View>
            
            <View style={styles.buttonContainer}>
                <Button text="Start" onPress={onSumbit}/>
            </View>
        </View>
    </View>
}
export default GameModeScreen;
const styles = StyleSheet.create({
    BodyContainer:{
        flex:1,
        backgroundColor:"#3550DC",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    mainContainer:{
        width:"100%",
        backgroundColor:"white",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        overflow:"hidden",
        flex:1,
        display:"flex",
        alignItems:"center",
        paddingVertical:20,
        justifyContent:"center",

    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#757575",
    },
    buttonContainer:{
        flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})