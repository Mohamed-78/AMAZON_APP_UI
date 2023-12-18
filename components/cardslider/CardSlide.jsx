import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import styles from './cardslide.style'

const CardSlide = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardContent}>
        <View>
            <Image source={item.image} resizeMode="cover" style={styles.imageSize} />
        </View>
    </TouchableOpacity>
  )
}

export default CardSlide