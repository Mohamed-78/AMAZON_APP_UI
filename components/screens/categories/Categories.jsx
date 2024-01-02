import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../../constants";
import styles from "./categories.style";
import { useNavigation } from '@react-navigation/native';

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

const Categories = () => {
  const navigation = useNavigation();
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
          <Text style={styles.headerTitle}>Category</Text>
          <Image
              source={icons.searchsymbol}
              resizeMode="cover"
              style={styles.iconSize}
          />
        </View>
      </View>
      <View style={styles.categoryCardPosition}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <TouchableOpacity style={styles.cardContent}>
              <View>
                <Image
                  source={category.image}
                  resizeMode="cover"
                  style={styles.imageSize}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default Categories;
