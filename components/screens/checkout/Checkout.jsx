import React, { useState, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Animated, ScrollView, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './checkout.style'
import { icons, images } from '../../../constants'
import Checkbox from "expo-checkbox";
import Pagination from '../../Pagination';
import NormalButtom from '../../buttons/normalButton/NormalButtom';
import SmallButtom from '../../buttons/smallButton/SmallButton';

const cards = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      image: images.blackcard,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      image: images.bluedcard,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
      image: images.goldcard,
    },
  ];

const Checkout = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pay = () => {
    setIsModalVisible(true);
  };
  
  const closeModal = () => {
    setIsModalVisible(false);
  };
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
            <Text style={styles.headerTitle}>Check Out</Text>
            <Image
                source={icons.add}
                resizeMode="cover"
                style={styles.iconSize}
            />
            </View>
        </View>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerPadding}>
                    <View style={styles.deleveryAddressPosition}>
                        <Image source={icons.gps} />
                        <Text style={styles.deleveryAddressText}>
                            Delevery Address*
                        </Text>
                    </View>
                    <View style={styles.deleveryCard}>
                        <View style={styles.AddressCardPosition}>
                            <Text>Borovaya 4-15, St. Petersburg, Russia</Text>
                            <Checkbox value={isChecked} onValueChange={setChecked} />
                        </View>
                    </View>
                    <View style={styles.deleveryCard}>
                        <View style={styles.AddressCardPosition}>
                            <Text>Pushkina 34-20, Moscow, Russia</Text>
                            <Checkbox value={isChecked} onValueChange={setChecked} />
                        </View>
                    </View>
                    <View style={styles.deleveryAddressPosition}>
                        <Image source={icons.visa} />
                        <Text style={styles.deleveryAddressText}>
                            Payment Method*
                        </Text>
                    </View>
                    <View style={styles.visaCardCenter}>
                        <FlatList
                            data={cards}
                            renderItem={({ item }) =>
                            <Image source={item.image} style={styles.visaCardImage} />}
                            keyExtractor={(item) => item.id}
                            pagingEnabled
                            snapToAlignment="center"
                            onScroll={handleOnScroll}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                        <Pagination data={cards} scrollX={scrollX} />
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.deleveryDateText}>Delevery Date:</Text>
                        <Text style={styles.secondText}>January, 01, 2024</Text>
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.deleveryPriceText}>Delevery:</Text>
                        <Text style={styles.secondText}>$0.00</Text>
                    </View>
                    <View style={styles.bottomHorizontalLine}></View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.totalPriceText}>Total Price:</Text>
                        <Text style={styles.totalPrice}>$11, 722.4</Text>
                    </View>
                </View>
                <View style={styles.payButton}>
                    <NormalButtom onPress={pay} buttonTitle={"Pay"} />
                </View>
            </View>
        </ScrollView>
        <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.imgCart}>
                    <Image source={icons.success} />
                    </View>
                    <Text style={styles.modalText}>Success !</Text>
                    <Text style={styles.modalSubText}>
                        Your order has been successfully paid
                    </Text>
                    <SmallButtom onPress={closeModal} buttonTitle={"Continue shopping"} />
                    <TouchableOpacity>
                    <Text style={styles.checkoutText}>Go to Orders</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </Modal>
    </>
  )
}

export default Checkout