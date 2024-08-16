import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

const {height} =Dimensions.get('window')
export default function Loader({title}:{title:String}) {
  return (
    <View style={styles.container}>
        <View style={{marginTop:-50}}>
      <Text style={{textAlign:'center',marginBottom:10,color:colors.defaultWhite,fontSize:16}}>{title?title:'Loading is running...'}</Text>

        </View>
        <ActivityIndicator size={'large'} color={colors.designColor}/>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        height:height-50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00000080'
    }
})