import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './dealslide.style'

const DealSlide = ({item}) => {
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

export default DealSlide