import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import { encode, decode } from 'js-base64';
import Button from "../buttons/Button";
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../../App"
import { useEffect, useState } from "react";
import { RFValue } from "../../screens/GameScreen";
interface props {
    question: string;
    answers: Array<string>;
    correctAnswer: string;
    onNextClickHandler: (score:number)=>void;
    currentQuestion?: number;
    quantity?: number
}
function QuestionBox(props:props){
    const { navigate } = useNavigation<StackNavigation>()
    const [guees, setGuees] = useState<string>()
    useEffect(()=>{
        setGuees("")
    },[props.currentQuestion])
    function onPressOut(text:string){
        setGuees(text)
        console.log(decode(props.correctAnswer))
        setTimeout(()=>{
            props.onNextClickHandler(props.correctAnswer===text?1:0)
        },1000)
    }
    return <View style={{flex:1,backgroundColor:"#3550DC"}}>
        <Text style={styles.title}>Question {props.currentQuestion}</Text>
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{decode(props.question)}</Text>
            {props.answers.map((answer:string)=>{
                return<Pressable key={answer} style={[styles.answer,(guees===answer && guees!==(props.correctAnswer))?{backgroundColor:"red"}:null,(guees===answer && guees===(props.correctAnswer))?{backgroundColor:"green"}:null,(guees && answer===props.correctAnswer)?{backgroundColor:"green"}:null]} onPress={()=>{!guees?onPressOut(answer):null}}>
                    <Text style={[{fontSize:RFValue(20)},guees===answer ||(guees && answer===props.correctAnswer)?{color:"white"}:null]}>{decode(answer)}</Text>
                </Pressable>
            })}
        </View>

    </View>
}
export default QuestionBox
const styles = StyleSheet.create({
    title:{
        fontSize: RFValue(30),
        fontWeight:"bold",
        color:"white",
        paddingVertical: StatusBar.currentHeight,
        textAlign:"center"
    },
    questionContainer:{
        width:"100%",
        backgroundColor:"white",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:30,
        paddingVertical:30,
        flex:1,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    questionText:{
        fontSize:RFValue(24),
        textAlign:"center",
        fontWeight:"700",
        color:"#757575"
    },
    answer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        width:"100%",
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
    }
})