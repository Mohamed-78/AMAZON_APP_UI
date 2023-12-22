import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../header/Header'
import styles from './home.style'
import Categorie from '../../categories/Categorie'
import Deals from '../../deals/Deals'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Categorie />
    </View>
  )
}

export default Home