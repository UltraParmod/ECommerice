import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { intro } from '../assets'
import { colors } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../type'

const {height}=Dimensions.get('window')
const Into = () => {
    const navigation:NavigationProps=useNavigation()
  return (
    <View style={styles.container}>
     {/* top */}
     <View style={styles.top}>
        <Image source={intro} alt='intro-image' style={styles.introImg}/>
     </View>
     {/* botoom */}
     <View style={styles.bottom}>
        <Text style={styles.title}>Great way to fit your style</Text>
        <Text style={styles.subTitle}>Complete your style with awesome collections from bazaar shopping</Text>

<TouchableOpacity style={styles.button} onPress={()=> 
    navigation.navigate('Home')}>
    <Text style={styles.buttonTxt}>Get Started </Text>
</TouchableOpacity>
     </View>
    </View>
  )
}

export default Into

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        height:height,
        padding:30
    },
    top:{
        height:height/2,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    introImg:{
        width:'100%',
        height:'100%',
        objectFit:'contain'
    },
    bottom:{
       flex:1,
       padding:30,
       alignItems:'center'
    },
    title:{
        color:'white',
        fontSize:32,
        fontWeight:'700',
        textAlign:'center'
    },
    subTitle:{
        color:colors.defaultWhite,
        textAlign:'center',
        marginTop:10,
        width:'120%'
    },
    button:{
        backgroundColor:'#fff',
        width:'100%',
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    buttonTxt:{
        fontSize:15,
        fontWeight:'600',
        color:colors.textBlack
    }
})