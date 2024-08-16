import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Into from './src/screens/Into'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './src/navigations/DrawerNavigation'
import StackNavigation from './src/navigations/StackNavigation'


// const RootContent=()=>{
//   <NavigationContainer>
//   <DrawerNavigation/>
// </NavigationContainer>
// }
const App =()=> {
  return (
  // <View style={{flex:1}}>
  //   <RootContent />
  // </View>
  <NavigationContainer>
  <DrawerNavigation/>
</NavigationContainer>

);
 
}
export default App

