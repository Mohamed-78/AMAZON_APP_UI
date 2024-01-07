import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./detail.style";
import SlideItem from "../../SlideItem";
import { icons, images } from "../../../constants";
import Pagination from "../../Pagination";
import NormalButtom from "../../buttons/normalButtom/NormalButtom";
import { useNavigation } from '@react-navigation/native';
import SmallButtom from "../../buttons/smallButton/SmallButton";

const categories = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sport",
    image: images.basket,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Electronics",
    image: images.mac,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "Phone",
    image: images.iphone,
  },
  {
    id: "0ac68afc-c605-48d3-awf8-fbd91aa97f28",
    title: "Fashion",
    image: images.fashion,
  },
  {
    id: "6yc68afc-c605-48d3-awf8-fbd91aa97f28",
    title: "Home",
    image: images.home,
  },
  {
    id: "k8c68afc-c605-48d3-awf8-fbd91aa97f28",
    title: "Toys",
    image: images.toys,
  },
];

const Details = () => {
  const [index, setIndex] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
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

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const handleAddToCart = () => {
    console.log("Adding to cart");
    setIsModalVisible(true);
  };
  
  const closeModal = () => {
    console.log("Closing modal");
    setIsModalVisible(false);
  };

  const handlePress = () => {
    navigation.navigate('Checkout');
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SlideItem item={item} />}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
          />
          <Pagination data={categories} scrollX={scrollX} />
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.flexPosition}>
            <Image source={icons.rating} style={styles.iconSize} />
            <Text style={styles.ratingCount}>(134)</Text>
          </View>
          <View style={[styles.flexPosition, styles.marginTop]}>
            <Text style={styles.productText}>KITON</Text>
            <Text style={styles.productCategoryText}>Cashmere Jacket</Text>
          </View>
          <Text style={styles.price}>$76,565.28</Text>
          <Text style={[styles.description, styles.marginBottom]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            soluta impedit, pariatur placeat voluptatem consectetur voluptas
            dicta ipsa, quis excepturi a distinctio laboriosam expedita quae!
            Numquam, quam? Velit, iusto sit?
          </Text>
        </View>
        <View style={styles.reviewsHeader}>
          <Text style={styles.reviewsText}>Reviews</Text>
          <TouchableOpacity style={styles.rightIconTouchable}>
            <Image
              source={icons.chevron}
              resizeMode="cover"
              style={styles.chevronIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.reviewsMargin}>
          <View style={styles.reviewsElement}>
            <View style={styles.userFlexElement}>
              <Image
                source={images.user}
                resizeMode="cover"
                style={styles.userImage}
              />
              <View style={styles.userInformationsElement}>
                <Image source={icons.rating} />
                <Text style={styles.reviewsUserName}>Zadi Borento</Text>
                <Text style={styles.reviewsDescription}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.reviewsMargin}>
          <View style={styles.reviewsElement}>
            <View style={styles.userFlexElement}>
              <Image
                source={images.user}
                resizeMode="cover"
                style={styles.userImage}
              />
              <View style={styles.userInformationsElement}>
                <Image source={icons.rating} />
                <Text style={styles.reviewsUserName}>Ernesto Balzac</Text>
                <Text style={styles.reviewsDescription}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Image source={icons.leftchevron} />
        </TouchableOpacity>
        <NormalButtom onPress={handleAddToCart} buttonTitle={"Add to Cart"} />
        <TouchableOpacity>
          <Image source={icons.addtoplaylist} />
        </TouchableOpacity>
      </View>

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
              Item was successfully added to cart
            </Text>
            <SmallButtom onPress={closeModal} buttonTitle={"Continue shopping"} />
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.checkoutText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Details;
