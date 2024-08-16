import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Into from '../screens/Into'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import ProductDitalis from '../screens/ProductDitalis'
import Address from '../screens/Address'
import Contact from '../screens/Contact'
import CheckOut from '../screens/CheckOut'


 const RootStack=createDrawerNavigator()

export default function StackNavigation() {
  return (
   <RootStack.Navigator initialRouteName='Home'>
    <RootStack.Screen name='Into' component={Into} options={{headerShown:false}}/>
    <RootStack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    <RootStack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
    <RootStack.Screen name='ProductDitalis' component={ProductDitalis} options={{headerShown:false}}/>
    <RootStack.Screen name='Address' component={Address} options={{headerShown:false}}/>
    <RootStack.Screen name='Contact' component={Contact} options={{headerShown:false}}/>
    <RootStack.Screen name='CheckOut' component={CheckOut} options={{headerShown:false}}/>





   </RootStack.Navigator>
  )
}

const styles = StyleSheet.create({})