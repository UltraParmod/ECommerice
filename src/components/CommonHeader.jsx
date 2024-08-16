import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import { colors } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../type'
import { logo } from '../assets'

export default function CommonHeader({ title }: { title: String }) {
  // const navigation:=useNavigation()
  const navigation: NavigationProps = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={()=>{
        navigation.goBack()
      }}>
        <ArrowLeftIcon color={colors.textBlack} size={20} />
        {/* <Text style={{color:colors.textBlack,marginLeft:5,fontWeight:'600'}}>{title}</Text> */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.cartIcon} 
        onPress={()=>{
          navigation.navigate('Home')
        }}
      >
        <Image source={logo} alt='logo-Icon' style={styles.logo}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Cart')
      }}>
      <ShoppingCartIcon color={colors.textBlack}  size={22}/>
      <View style={styles.cartCount}>
        <Text style={styles.cartText}>0</Text>
      </View>
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBlockColor: 'gray'
  },
  logo:{
    width:100,
    height:25,
    objectFit:'contain'
  },
  cartCount:{
    borderRadius:50,
    backgroundColor:'black',
    position:'absolute',
    right:-5,
    top:-6,
    // width:16,
    paddingHorizontal:3,
    height:20,
    alignItems:'center',
    justifyContent:'center'
  },

  cartText:{
    color:colors.defaultWhite,
    fontSize:12,
    fontWeight:'700'
  }
})