import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ProductsProps} from  '../../type'
import { colors } from '../constants'
import PriceFormat from './PriceFormat'

export default function DetailsView({productsData}:any) {

  return (
    <View style={{marginHorizontal:20}}>
      <Text style={{fontSize:20,fontWeight:'700',color:colors.textBlack}}>{productsData?.title}</Text>
      <Text style={{marginVertical:8}}>{productsData?.description}</Text>
      <Text>Brand:{' '}<Text style={{color:colors.textBlack,fontWeight:'600'}}>{productsData?.brand}</Text></Text>
      <Text>Category:{' '}<Text style={{color:colors.textBlack,fontWeight:'600'}}>{productsData?.category}</Text></Text>
     
     <Text style={{marginVertical:2,color:colors.designColor}}>You are saving{' '} 
         <PriceFormat
          style={{color:'green',fontWeight:'600'}}
          amount={productsData?.previousPrice - productsData?.price}
        />{' '} 
        from this product
     </Text>



    </View>
  )
}

const styles = StyleSheet.create({})