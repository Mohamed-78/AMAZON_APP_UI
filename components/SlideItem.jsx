import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { images } from '../constants';

const {width, height } = Dimensions.get('screen');

const SlideItem = ({item}) => {
  return (
    <View style={styles.container}>
        <Image source={item.image} 
            resizeMode="cover"
            style={styles.image}
        />
    </View>
  )
}

export default SlideItem

const styles = StyleSheet.create({
    container:{
        width,
        // height,
        alignItems: "center"
    },
    image: {
        flex: 0.5,
        width: '80%'
    }
})