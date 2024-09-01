import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import Login from "./src/Login/Logn";
import SplashScreen from "./src/SplashScreen/SplashScreen";
import MainScreen from "./src/MainScreen/MainScreen"; 
enableScreens(true)

const Stack = createNativeStackNavigator()
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;