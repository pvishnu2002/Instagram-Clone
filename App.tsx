import React from "react";
import { Text,View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import Login from "./src/Login/Logn";
import SplashScreen from "./src/SplashScreen/SplashScreen";
enableScreens(true)

const Stack = createNativeStackNavigator()
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;