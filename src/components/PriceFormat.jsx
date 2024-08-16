import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PriceFormat({amount,style}:{amount:number | undefined ;style?:any}) {

    const formattedAmout=new Number(amount).toLocaleString(
        'en-US',{
            style:'currency',
            currency:'USD',
            minimumFractionDigits:2
        }
    )
  return <Text style={style}>{formattedAmout}</Text>
}

const styles = StyleSheet.create({})