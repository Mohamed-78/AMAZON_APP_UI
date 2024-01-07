import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './checkout.style'
import { icons, images } from '../../../constants'

const Checkout = () => {
  return (
    <>
    <View style={styles.headerHeight}>
        <View style={styles.displayPosition}>
          <TouchableOpacity>
            <Image
              source={icons.back}
              resizeMode="cover"
              style={styles.iconSize}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Check Out</Text>
          <Image
              source={icons.add}
              resizeMode="cover"
              style={styles.iconSize}
          />
        </View>
      </View>
    </>
  )
}

export default Checkout