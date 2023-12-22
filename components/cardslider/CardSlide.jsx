import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './cardslide.style'

const CardSlide = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContent}>
        <View style={styles.imageContent}>
          <Image source={item.image} 
          resizeMode="cover" 
          style={styles.imageSize} />
        </View>
      </TouchableOpacity>
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </View>
  )
}

export default CardSlide