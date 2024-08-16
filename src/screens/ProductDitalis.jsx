import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../components/CommonHeader'
import {ProductsProps} from  '../../type'
import { colors } from '../constants';
import Loader from '../components/Loader';
import DetailsView from '../components/DetailsView';
import PriceFormat from '../components/PriceFormat';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import IsNewBadge from '../components/IsNewBadge';




const {width, height} = Dimensions.get('window');
export default function ProductDitalis({route}) {
  const _id = route?.params?._id;
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState(null);
{/* <ProductsProps | null> */}



    const getData = async () => {
    try {
      // setIsLoading(true);
      const response = await fetch(
        `https://jsonserver.reactbd.com/amazonpro/${_id}`,
      );
      const json = await response.json();
      setProductData(json);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getData();
  }, [_id]);
  return (
       <View>
      <CommonHeader title={'Product Detalis'} />
      {isLoading? <Loader  title={'Products Details is Loading...'}/>:
        <View style={styles.container}>
        <View style={styles.imgView}>
          {productData?.image &&
            <Image
              source={{uri: productData?.image}}
              alt="product-img"
              style={styles.img}
            /> 
          }

        </View>
          <DetailsView productsData={productData} />

          <View style={styles.bottomMenu}>
            <View>
              <Text style={{
                color:colors.defaultWhite,
                fontWeight:'600',
                fontSize:16,
              }}>
              <PriceFormat amount={productData?.price}/>

              </Text>
              <Text style={{
                color:colors.defaultWhite,
                textDecorationLine:'line-through'
              }}>
              <PriceFormat amount={productData?.previousPrice}/>
              </Text>
            </View>
            <TouchableOpacity style={{backgroundColor:colors.designColor,paddingHorizontal:10,paddingVertical:6,borderRadius:4,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:12,fontWeight:'600',color:colors.textBlack}}>Add to Cart </Text>
                <ArrowRightIcon size={16} color={colors.textBlack}/>
              </TouchableOpacity>
              </View>
              {
                productData?.isNew && (
                  <IsNewBadge customStyle={{
                    right:15,
                    top:15,
                    paddingHorizontal:10,
                    paddingVertical:7,
                    borderRadius:6
                  }}
                    title='New Arrival'
                  />
                )
              }
      </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'white',
    height: height,
    position: 'relative',
  },
  imgView: {
    width: width,
    height: height / 2,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 60,
    borderWidth: 1,
    borderColor: 'black',
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 6,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: colors.bgColor,
  },
})









