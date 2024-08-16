import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SideMenu() {
  const navigationData=[
    {
      title:'Home'
    },
    {
      title:'Intro'
    },
    {
      title:'Cart'
    },
    {
      title:'Addressess'
    },
    {
      title:'Contact'
    },
  ]
  const navigation: any=useNavigation()
  return (
    <View>
      <Text>SideMenu</Text>
    </View>
  )
}

const styles = StyleSheet.create({})