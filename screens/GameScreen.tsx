import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Text, View,ActivityIndicator, StyleSheet, Dimensions , Platform, StatusBar} from "react-native";
import Button from "../components/buttons/Button";
import QuestionBox from "../components/renderItems/QuestionBox";
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../App";
import { decode } from "js-base64";
export function RFValue(fontSize:number, standardScreenHeight = 680) {
    const { height, width } = Dimensions.get("window");
    const standardLength = width > height ? width : height;
    const offset =
      width > height ? 0 :78; 
  
    const deviceHeight =
        Platform.OS === "android"
        ? standardLength - offset
        : standardLength;
  
    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
    return Math.round(heightPercent);
  }
export interface question{
    category?:string;
    correct_answer:string;
    difficulty?:string;
    incorrect_answers:Array<String>;
    question:string,
    type?:string;
}
interface score{
    totalScore:number;
    question: Array<boolean>
}

function GameScreen({route}:any):JSX.Element{
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [data, setData] = useState<Array<question>>()
    const [score, setScore] = useState<score>({totalScore:0,question:[]})
    const { navigate } = useNavigation<StackNavigation>()

    const source = axios.CancelToken.source();
    useLayoutEffect(()=>{
        axios.get(route.params.url).then(res=>{
                console.log(res.data.results)
                setData(res.data.results)
            return source.cancel()
        })
    },[])
    function shuffleAnswers(incorrectAnswers:Array<String>,correctAnswer:string):string[]{
        let newAsnwers: string[] = []
        incorrectAnswers.map((item:String)=>{
            newAsnwers.push(item.toString())
        })
        newAsnwers.push(correctAnswer)
        newAsnwers.sort((a,b)=> 0.5 - Math.random())
        return newAsnwers
    }
    function onNextClickHandler(point:number){
        let prev = score
        prev.totalScore += point;
        prev.question.push(point?true:false)
        setScore(prev)
        if(currentQuestion<parseInt(route.params.quantity)-1){
            setCurrentQuestion(prev=>prev+1)
        }
        else{
            navigate("Statistic",{score:score,category:route.params.category})
        }
    }
    return <View style={styles.container}>
        {data?<View style={{flex:1,width:"100%"}}>
            <QuestionBox onNextClickHandler={onNextClickHandler} correctAnswer={(data[currentQuestion].correct_answer)} question={(data[currentQuestion].question)} 
            answers={shuffleAnswers(data[currentQuestion].incorrect_answers,data[currentQuestion].correct_answer)} currentQuestion={currentQuestion+1}/>

        </View>:<View style={styles.loadingContainer}><Text style={[styles.title,]}>Loading Game...</Text>
        
        <ActivityIndicator size="large" color="white" />
        <Button text="Cancel" onPress={()=>{navigate("Home")}}/></View>}
    </View>
}
export default GameScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"#3550DC"
    },
    title:{
        fontSize: RFValue(30),
        fontWeight:"bold",
        textAlign:"center",
        width:"100%",
        color:"white"
    },
    loadingContainer:{
        flex:1,
        justifyContent:'space-evenly'
    }
})