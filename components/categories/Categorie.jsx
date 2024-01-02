import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './categorie.style'
import { icons, images } from '../../constants'
import CardSlide from '../cardslider/CardSlide'
import Deals from '../deals/Deals'
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
  ];

const Categorie = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.container}>
        <View style={styles.categoryHeader}>
            <Text style={styles.categoryText}>Category</Text>
            <TouchableOpacity style={styles.rightIconTouchable} onPress={handlePress}>
                <Image source={icons.chevron} resizeMode="cover" style={styles.chevronIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <FlatList
            data={categories}
            renderItem={({ item }) => 
            <CardSlide item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: 12 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
    </View>
  )
}

export default Categorie