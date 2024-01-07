import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../header/Header'
import styles from './home.style'
import Categorie from '../../categories/Categorie'
import Deals from '../../deals/Deals'
import Recommended from '../../recommended/Recommended'
import { icons, images } from '../../../constants'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        leftElement={images.logo}
        width={120}
        height={40}
        rightElement={icons.speech}
        iconSize={20}
        showIconBackground={true}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Categorie />
        <Deals />
        <Recommended />
      </ScrollView>
    </View>
  )
}

export default Home