import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { icons, images } from '../../constants'
import DealSlide from '../dealslider/DealSlide'
import styles from './recommended.style'
import RecommendedSlide from '../recommendedSlide/RecommendedSlide'

const recommended = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Men's Suit",
      subtitle: "MoJni",
      price: "$20,433",
      image: images.costume,
      icon: icons.addtoplaylist
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Samsung S12",
      subtitle: "Samsung",
      price: "$299.95",
      image: images.samsung,
      icon: icons.addtoplaylist
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
      title: "Cashmere",
      subtitle: "Puma",
      price: "$3,813.28",
      image: images.double,
      icon: icons.addtoplaylist
    },
  ];

const Deals = () => {
  return (
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
        renderItem={({ item }) => 
        <RecommendedSlide item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: 12 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
</View>
  )
}

export default Deals