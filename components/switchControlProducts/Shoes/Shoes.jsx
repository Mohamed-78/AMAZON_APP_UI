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
import styles from "./shoes.style";

const popular = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Nike V2K Run",
    subtitle: "Nike",
    price: "$119,99",
    image: images.nike,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Nike Dunk Low",
    subtitle: "Nike",
    price: "$126,299.95",
    image: images.nike_1,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "Nike Air Force",
    subtitle: "Nike",
    price: "$129,99",
    image: images.nike_3,
    icon: icons.addtoplaylist,
  },
];
const recommended = [
  {
    icon: icons.addtoplaylist,
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Nike Air Max",
    subtitle: "Nike",
    price: "$79,99",
    image: images.nike_4,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Nike Air Force 1",
    subtitle: "Nike",
    price: "$6,299.95",
    image: images.nike_5,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "Nike Full Low",
    subtitle: "Nike",
    price: "$64,97",
    image: images.nike_6,
    icon: icons.addtoplaylist,
  },
];

const Shoes = () => {
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

export default Shoes;
