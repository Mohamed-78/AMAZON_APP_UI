import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import DealSlide from "../../dealslider/DealSlide";
import { icons, images } from "../../../constants";
import styles from "./bags.style";

const popular = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Gucci black Bag",
    subtitle: "Gucci",
    price: "$50,99",
    image: images.gucci_bag_2,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Adidas Bag",
    subtitle: "Adidas",
    price: "$26,299.95",
    image: images.adidas_2,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "Backpack Devred",
      subtitle: "Devred",
    price: "$29,99",
    image: images.bag,
    icon: icons.addtoplaylist,
  },
];
const recommended = [
  {
    icon: icons.addtoplaylist,
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Gucci Bag",
    subtitle: "Gucci",
    price: "$79,99",
    image: images.gucci_bag_1,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Gucci Bag",
    subtitle: "Gucci",
    price: "$69,299.95",
    image: images.gucci_bag_3,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "Adidas Bag",
    subtitle: "Adidas",
    price: "$64,97",
    image: images.adidas,
    icon: icons.addtoplaylist,
  },
];

const Bags = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.dealsHeader}>
            <Text style={styles.dealsText}>Popular</Text>
            <TouchableOpacity style={styles.rightIconTouchable}>
              <Image
                source={icons.chevron}
                resizeMode="cover"
                style={styles.chevronIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardsContainer}>
            <FlatList
              data={popular}
              renderItem={({ item }) => <DealSlide item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ columnGap: 12 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.dealsHeader}>
            <Text style={styles.dealsText}>Recommended</Text>
            <TouchableOpacity style={styles.rightIconTouchable}>
              <Image
                source={icons.chevron}
                resizeMode="cover"
                style={styles.chevronIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardsContainer}>
            <FlatList
              data={recommended}
              renderItem={({ item }) => <DealSlide item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ columnGap: 12 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Bags;
