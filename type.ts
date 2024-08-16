import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";


export type RootStackParamList={
    Home:undefined;
    Into:undefined;
    Cart:undefined;
    ProductDitalis:undefined;
    Address:undefined;
    Contact:undefined;
    CheckOut:undefined;
}
export type NavigationProps=NativeStackNavigationProp<RootStackParamList>

export interface ProductsProps{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:string;
    previousPrice:string;
    quantity:string;
    title:string;
    _id:string;

}

export interface Item{
    item:ProductsProps
}