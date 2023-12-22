import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import styles from './deals.style'
import { icons, images } from '../../constants'
import DealSlide from '../dealslider/DealSlide'

const deals = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Woolen Jacket",
      image: images.woolean,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Cashmere Jacket",
      image: images.cashmere,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
      title: "Smoking",
      image: images.smoking,
    },
  ];

const Deals = () => {
  return (
    <View style={styles.container}>
    <View style={styles.dealsHeader}>
        <Text style={styles.dealsText}>Deals of the Day</Text>
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
        data={deals}
        renderItem={({ item }) => 
        <DealSlide item={item} />}
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