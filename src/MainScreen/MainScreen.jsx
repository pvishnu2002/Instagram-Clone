import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import PostScreen from '../PostScreen/PostScreen';
import ReelScreen from '../ReelScreen/ReelScreen';
import ProfileScreen from '../ProfileScren/ProfileScreen';


import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
 
export class MainScreen extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Entypo name="home" color={focused ? '#ff3300' : '#000'} size={28} />
            ),
          }}
        />
        <Tab.Screen 
          name='Search' 
          component={SearchScreen} 
          options={{
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Feather name="search" color={focused ? '#ff3300' : '#000'} size={28} />
            ),
          }}
        />
        <Tab.Screen 
          name="Post" 
          component={PostScreen} 
          options={{
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <FontAwesome name="plus-square-o" color={focused ? '#ff3300' : '#000'} size={28} />
            ),
          }}
        />
        <Tab.Screen 
          name='Reel' 
          component={ReelScreen} 
          options={{
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <FontAwesome name="plus-square-o" color={focused ? '#ff3300' : '#000'} size={28} />
            ),
          }}
          />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <FontAwesome name="user-circle" color={focused ? '#ff3300' : '#000'} size={28} />
            ),
          }}
          />
      </Tab.Navigator>
    );
  }
}

export default MainScreen;
