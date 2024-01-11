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
import styles from "./clothing.style";

const popular = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Versace Pull Over",
    subtitle: "Versace",
    price: "$50,99",
    image: images.pull,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Lacoste Polo Shirt",
    subtitle: "Lacoste",
    price: "$26,299.95",
    image: images.polo,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "Cashmere",
      subtitle: "Devred",
    price: "$29,99",
    image: images.cashmere,
    icon: icons.addtoplaylist,
  },
];
const recommended = [
  {
    icon: icons.addtoplaylist,
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Tommy Tee-Shirt",
    subtitle: "Tommy",
    price: "$79,99",
    image: images.teeShirt,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Men Jeans",
    subtitle: "MoVibe",
    price: "$69,299.95",
    image: images.jeans,
    icon: icons.addtoplaylist,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
    title: "woolean",
    subtitle: "Woolean",
    price: "$64,97",
    image: images.woolean,
    icon: icons.addtoplaylist,
  },
];

const Clothing = () => {
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

export default Clothing;
