import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { icons } from '../../constants'
import styles from "./recommendedslide.style";

const RecommendedSlide = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContent}>
        <View style={styles.imageContent}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.imageSize}
          />
        </View>
        <View style={styles.playlistPosition}>
          <Image source={item.icon} style={styles.playListIcon} />
        </View>
        <View style={styles.dealsSubElement}>
          <Image source={icons.rating} style={styles.iconSize} />
          <View style={styles.allText}>
            <Text style={styles.dealsTitle}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subtitle}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendedSlide;
