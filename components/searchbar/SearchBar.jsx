import React from 'react'
import styles from './searchbar.style'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { icons, images } from '../../constants'

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
            <TouchableOpacity>
                <Image source={icons.search} style={styles.searchIcon} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => ({})}
              placeholder="What are looking for?"
            />
            <TouchableOpacity>
                <Image source={icons.camera} style={styles.searchIcon} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchBar