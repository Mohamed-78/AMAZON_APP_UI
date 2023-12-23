import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../header/Header'
import styles from './home.style'
import Categorie from '../../categories/Categorie'
import Deals from '../../deals/Deals'
import Recommended from '../../recommended/Recommended'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Categorie />
        <Deals />
        <Recommended />
      </ScrollView>
    </View>
  )
}

export default Home