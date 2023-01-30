import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GameModeScreen from './screens/GameModeScreen';
import GameScreen from './screens/GameScreen';
import StatisticScreen from './screens/StatisticScreen';

interface Data {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>
  question:"string",
  type: string
}
interface categories {
  name: string;
  icon: string;
  iconPressed: string;
  id: 0;
}

export type ScreenNames = ["Home", "GameMode", "Game", "Statistic"] // type these manually
export type RootStackParamList = {
  Home: undefined,
  GameMode: categories,
  Game: object,
  Statistic: object
};
export type StackNavigation = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();
//"#3550DC"
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GameMode" component={GameModeScreen} options={({route})=>({title:route.params.name,headerTitleAlign:"center",headerTintColor:"white",headerStyle:{backgroundColor:"#3550DC",borderBottomColor:"white",borderBottomWidth:2}})}/>
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown:false}} />
        <Stack.Screen name="Statistic" component={StatisticScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%"
  },
});
