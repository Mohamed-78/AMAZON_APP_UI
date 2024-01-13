import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './cart.style'
import { icons, images } from '../../../constants'
import NormalButtom from '../../buttons/normalButton/NormalButtom'
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Nike V2K Run",
    subtitle: "Nike",
    price: "$119,99",
    image: images.nike,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed53ad53abb28ba",
    title: "Gucci black Bag",
    subtitle: "Gucci",
    price: "$50,99",
    image: images.gucci_bag_2,
  }
];

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePress = () => {
    navigation.navigate('Checkout')
  }

  return (
    <>
      <View style={styles.headerHeight}>
        <View style={styles.displayPosition}>
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Image
              source={icons.back}
              resizeMode="cover"
              style={styles.iconSize}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>You cart</Text>
          <Image
              source={icons.searchsymbol}
              resizeMode="cover"
              style={styles.iconSize}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.cartBox}>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <View style={styles.containerCart}>
                <View style={styles.leftContainer}>
                  <Image 
                    source={item.image} 
                    style={styles.cartImageSize}
                    resizeMode='contain'
                  />
                  <View>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
                <View style={styles.rightContainer}>
                  <TouchableOpacity onPress={increaseQuantity}>
                    <Text style={styles.qteBtnText}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantiteText}>{quantity}</Text>
                  <TouchableOpacity onPress={decreaseQuantity}>
                    <Text style={styles.qteBtnText}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.secondHorizontalLine}></View>
            </React.Fragment>
          ))}
          <View>
            <View style={styles.containerCart}>
              <Text style={styles.footerText}>Goods</Text>
              <Text style={styles.footerPrice}>$111,724.4</Text>
            </View>
            <View style={styles.containerCart}>
              <Text style={styles.footerText}>Delevery</Text>
              <Text style={styles.footerPrice}>$0.00</Text>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.containerCart}>
              <Text style={styles.totalPriceText}>Total Price</Text>
              <Text style={styles.totalPrice}>$111,724.4</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.marginTopBtn}>
        <NormalButtom onPress={handlePress} buttonTitle={"Checkout"} />
      </View>
    </>
  )
}

export default Cart;
