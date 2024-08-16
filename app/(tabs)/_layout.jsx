import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from "../../constants/Colors"

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:Colors.PRIMARY,
      tabBarStyle:{
        paddingBottom: 10,
        paddingTop:10,
        height:70,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'outfit-bold',
      },
    }}>
      <Tabs.Screen name="HomeTab" options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
      }} />
      <Tabs.Screen name="Favourite" options={{
        title: "Favourite",
        headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} /> 
      }} />
      <Tabs.Screen name="Inbox" options={{
        title: "Inbox",
        headerShown: false,
        tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={24} color={color} />
      }} />
      <Tabs.Screen name="Profile" options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
      }} />
    </Tabs>
  )
}

export default TabLayout