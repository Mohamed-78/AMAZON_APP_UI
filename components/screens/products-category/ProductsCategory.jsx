import React from 'react'
import { View, Text } from 'react-native'
import styles from './productscategory.style'
import Header from '../../header/Header'
import { icons, images } from '../../../constants'

const ProductsCategory = () => {
  return (
    <View style={styles.container}>
        <Header
            leftElement={icons.back}
            width={30}
            height={30}
            rightElement={icons.filter}
            iconSize={30}
            showIconBackground={false}
        />
    </View>
  )
}

export default ProductsCategory