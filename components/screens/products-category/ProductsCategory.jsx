import React from 'react'
import { View, Text } from 'react-native'
import styles from './productscategory.style'
import Header from '../../header/Header'
import { icons, images } from '../../../constants'
import SwitchButton from '../../SwitchButton'
import All from '../../switchControlProducts/All/All'
import Shoes from '../../switchControlProducts/Shoes/Shoes'
import Bags from '../../switchControlProducts/Bags/Bags'
import Clothing from '../../switchControlProducts/Clothing/Clothing'
import { useNavigation } from '@react-navigation/native';

const ProductsCategory = () => {
  const navigation = useNavigation();
  const handleLeftPress = () => {
    navigation.goBack();
  };
  const tabs = [
    {
      label: 'All',
      content: (
        <>
          <All />
        </>
      ),
    },
    {
      label: 'Shoes',
      content: (
        <>
         <Shoes />
        </>
      ),
    },
    {
      label: 'Bags',
      content: (
        <>
          <Bags />
        </>
      ),
    },
    {
      label: 'Clothing',
      content: (
        <>
          <Clothing />
        </>
      ),
    },
  ];
  return (
    <View style={styles.container}>
        <Header
            onPressLeft={handleLeftPress}
            leftElement={icons.back}
            width={30}
            height={30}
            rightElement={icons.filter}
            iconSize={30}
            showIconBackground={false}
        />
        <SwitchButton tabs={tabs} />
    </View>
  )
}

export default ProductsCategory