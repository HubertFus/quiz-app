import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import CategoryTile from "../components/renderItems/CategoryTile";


const categories = [
    {name:"Any Category",icon:"albums-outline",iconPressed:"albums", id:0},
    {name:"General Knowledge",icon:"bandage-outline",iconPressed:"bandage-sharp", id:9},
    {name:"Books",icon:"book-outline",iconPressed:"book-sharp", id:10},
    {name:"Film",icon:"film-outline",iconPressed:"film-sharp", id:11},
    {name:"Music",icon:"musical-notes-outline",iconPressed:"musical-notes-sharp", id:12},
    {name:"Musicals & Theatres",icon:"megaphone-outline",iconPressed:"megaphone-sharp", id:13},
    {name:"Television",icon:"tv-outline",iconPressed:"tv-sharp", id:14},
    {name:"Video Games",icon:"game-controller-outline",iconPressed:"game-controller-sharp", id:15},
    {name:"Board Games",icon:"cube-outline",iconPressed:"cube-sharp", id:16},
    {name:"Science & Nature",icon:"flower-outline",iconPressed:"flower-sharp", id:17},
    {name:"Computers",icon:"desktop-outline",iconPressed:"desktop-sharp", id:18},
    {name:"Mathematic",icon:"triangle-outline",iconPressed:"triangle-sharp", id:19},
    {name:"Mythology",icon:"bug-outline",iconPressed:"bug-sharp", id:20},
    {name:"Sports",icon:"basketball-outline",iconPressed:"basketball-sharp", id:21},
    {name:"Geography",icon:"map-outline",iconPressed:"map-sharp", id:22},
    {name:"History",icon:"calendar-outline",iconPressed:"calendar-sharp", id:23},
    {name:"Politics",icon:"md-person-outline",iconPressed:"md-person-sharp", id:24},
    {name:"Art",icon:"brush-outline",iconPressed:"brush-sharp", id:25},
    {name:"Celebrities",icon:"star-outline",iconPressed:"star-sharp", id:26},
    {name:"Animals",icon:"paw-outline",iconPressed:"paw-sharp", id:27},
    {name:"Vehicles",icon:"car-outline",iconPressed:"car-sharp", id:28},
]
function HomeScreen():JSX.Element{
    return <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Time for Quiz</Text>
        </View>
        <View style={styles.searchBarContainer}>
            <Ionicons name="search" size={24} color="#d6d6d6" />
            <TextInput placeholder="search category" style={styles.searchBarInput}/>
        </View>
        <View style={styles.bodyContainer}>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitleText}>Choose Category</Text>
            </View>
            <ScrollView contentContainerStyle={styles.categoriesContainer}>
                {categories.map((item)=><CategoryTile item={item}/>)}
            </ScrollView>
        </View>
    </View>
}
export default HomeScreen;
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#3550DC"
    },
    titleContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:40
    },
    titleText:{
        color:"white",
        fontSize:23,
        fontWeight:"bold",
        letterSpacing:1,
    },
    searchBarContainer:{
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        borderRadius:20,
        padding:5,
        marginHorizontal:30,
        marginVertical:10
    },
    searchBarInput:{
        width:"100%"
    },
    bodyContainer:{
        flex:1,
        backgroundColor:"white",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    subTitleContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    subTitleText:{
        color:"#3550DC",
        fontSize:19,
        fontWeight:"700"
    },
    categoriesContainer:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    },
})
