import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GameModeScreen from './screens/GameModeScreen';

export type ScreenNames = ["Home", "Game"] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();
//"#3550DC"
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Game" component={GameModeScreen} options={({route})=>({title:route.params.name,headerTitleAlign:"center",headerTintColor:"white",headerStyle:{backgroundColor:"#3550DC",borderBottomColor:"white",borderBottomWidth:2}})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%"
  },
});
