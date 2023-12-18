import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, icons, images } from '../../constants'
import styles from './header.style'
import SearchBar from '../searchbar/SearchBar'

const Header = () => {
  return (
    <View style={styles.headerHeight}>
        <View style={styles.displayPosition}>
            <Image source={images.logo} resizeMode="cover" style={styles.imageSize}/>
            <View style={styles.iconBackgroundColor}>
                <Image source={icons.speech} resizeMode="cover" style={styles.iconSize} />
            </View>
        </View>
        <View>
            <SearchBar />
        </View>
    </View>
  )
}

export default Header