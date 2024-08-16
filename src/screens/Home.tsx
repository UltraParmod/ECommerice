import { Alert, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../components/Headers'
import { colors } from '../constants'
import { Item } from '../../type'
import { bannerOne, bannerThree, bannerTwo } from '../assets'
import Carousel from 'react-native-reanimated-carousel'
import { useNavigation } from '@react-navigation/native'
import {ShoppingCartIcon } from 'react-native-heroicons/outline'
import IsNewBadge from '../components/IsNewBadge'
import Loader from '../components/Loader'

const { height, width } = Dimensions.get('window')
export default function Home() {
  const navigation:any = useNavigation()
  const [productArray, setProductsArray] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const images = [bannerOne, bannerTwo, bannerThree,]

  // Api Calling Here ..
  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://jsonserver.reactbd.com/amazonpro')
      const json = await response.json()
      setProductsArray(json)
      setIsLoading(false)

    } catch (error) {
      console.log('Error', error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const RenderItem = ({ item }: Item) => {
    return (
      <TouchableOpacity style={styles.productView} onPress={()=>{
        navigation.navigate('ProductDitalis',{_id:item?._id})
      }}>
        <Image source={{ uri: item?.image }} alt='product-img' style={styles.img} />

        <View style={styles.textView}>
        <Text>{item?.title}</Text>
        <View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

          <View>
          <Text style={{fontWeight:'600',color:colors.textBlack,fontSize:12}}>${item?.price}</Text>
          <Text style={{fontSize:12,textDecorationLine:'line-through'}}>${item?.previousPrice}</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:colors.designColor,paddingHorizontal:8,paddingVertical:5,borderRadius:5}}>
          <ShoppingCartIcon size={21} color={colors.textBlack} />
          </TouchableOpacity>
          </View>

        </View>
      </View>
      {item?.isNew && <IsNewBadge />}
      </TouchableOpacity>
      
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Headers />
      <View>
        {isLoading ? <Loader title={'Products is Loading ...'}/> :
          <FlatList
            data={productArray}
            numColumns={2}
            contentContainerStyle={styles.container}
            keyExtractor={(item: any) => item?._id}
            renderItem={RenderItem}
            refreshing={refreshing}
            onRefresh={() => {
              getData()
            }}
            ListHeaderComponent={<View>

              <Carousel loop width={width} style={{ height: 250, }} autoPlay={true} data={images} scrollAnimationDuration={1500} renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Image source={item} style={{ width: '100%', height: 230, objectFit: 'cover', }} />
                  </TouchableOpacity>
                )
              }} />
            </View>
            }
          />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultWhite,
    paddingBottom: 200
  },
  productView: {
    flex: 1,
    minHeight: height / 3.3,
    borderWidth: .5,
    borderColor: colors.lightText,
    margin: 5,
    borderRadius: 6,
    marginHorizontal: 10,
    overflow: 'hidden',
    position: 'relative'
  },
  img: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    objectFit: 'contain'
  },
  textView:{
    padding:10
  }
})