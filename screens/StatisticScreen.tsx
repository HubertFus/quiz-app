import { Text, View, StyleSheet, StatusBar} from "react-native";
import { useState } from "react";
import Button from "../components/buttons/Button";
import { RFValue } from "./GameScreen";
import { categories } from "./HomeScreen";
import { useNavigation } from '@react-navigation/native';
import { type StackNavigation } from "../App";
function StatisticScreen({route}:any):JSX.Element{
    const { navigate } = useNavigation<StackNavigation>()
    const [toast, startToast] = useState<boolean>()
    function openToast():void{
        startToast(true)
        setTimeout(() => {
            startToast(false)
        }, 4000);
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{categories[route.params.category-8].name}</Text>
        <View style={styles.bodyContainer}>
            <Text style={styles.subTitle}>Score: {route.params.score.totalScore} / {route.params.score.question.length}</Text>
            <View style={styles.questionAnswerContainer}>
                {route.params.score.question.map((item:boolean,index:number)=>{
                    return <View key={index} style={[item?{backgroundColor:"green"}:{backgroundColor:"red"},styles.questionAnswer]}>
                        <Text style={styles.questionAnswerText}>{index+1}</Text>
                    </View>
                })}
            </View>
            <Button text="play again" onPress={()=>{navigate("Home")}}/>
            <Button text="share score" onPress={openToast}/>
        </View>
            {toast?<View style={styles.toastContainer}><Text style={styles.toastText}>Coming soon...</Text></View>:null}
    </View>
}
export default StatisticScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#3550DC",
        alignItems:"center"
    },
    title:{
        paddingVertical: StatusBar.currentHeight,
        fontSize:RFValue(40),
        fontWeight:"bold",
        color:"white",
        paddingHorizontal:20,
        borderBottomColor:"white",
        borderBottomWidth:2,
    },
    subTitle:{
        paddingVertical:20,
        textAlign:"center",
        fontWeight:"700",
        fontSize:RFValue(28)
    },
    bodyContainer:{
        flex:1,
        margin:20,
        padding:20,
        width:"90%",
        backgroundColor:"white",
        borderRadius:30,
        justifyContent:"space-evenly"
    },
    questionAnswerContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        
    },
    questionAnswer:{
        borderRadius:RFValue(30),
        height:RFValue(50),
        width:RFValue(50),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    questionAnswerText:{
        fontSize:RFValue(30),
        color:"white",
        fontWeight:"bold"
    },
    toastContainer:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:100,
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    toastText:{
        padding:30,
        fontSize:RFValue(40),
        fontWeight:"bold",
    }
})