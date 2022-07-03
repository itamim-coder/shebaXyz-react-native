import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import { initializeApp } from "firebase/app";
import Home from "./screen/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from "./screen/Profile";


const firebaseConfig = {
  apiKey: "AIzaSyA4N3eOvMOPykorixuADG_GPX6W0NVCmEk",
  authDomain: "sheba-xyz.firebaseapp.com",
  projectId: "sheba-xyz",
  storageBucket: "sheba-xyz.appspot.com",
  messagingSenderId: "228861548778",
  appId: "1:228861548778:web:fa16ddf7d681acdeb09f93"
};

const app = initializeApp(firebaseConfig);

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator 
    
    screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen   name="Home" component={Home} options={{        
      tabBarIcon: ({color})=> <Entypo name="home" size={32} color={color}/>
      }}/>
 
      <Tab.Screen name="Profile" component={Profile} options={{
      tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color}/>
      }}/>
    </Tab.Navigator>
  )
} 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
     
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="TabNavigator" component={TabNavigator}  />
      

      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
