import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigation from './StackNavigation'
import SideMenu from '../components/SideMenu'

export default function DrawerNavigation() {

    const DrawerStack=createDrawerNavigator()
  return (
   <DrawerStack.Navigator drawerContent={()=><SideMenu />}>
    {/* <DrawerStack.Screen name='SideMenu' component={SideMenu} options={{headerShown:false}}/> */}

    <DrawerStack.Screen name='StackScreens' component={StackNavigation} options={{headerShown:false}}/>
   </DrawerStack.Navigator>
  )
}

const styles = StyleSheet.create({})