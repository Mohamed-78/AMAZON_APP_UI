import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './roundedbuttom.style'

const RoundedButtom = ({buttonTitle, onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default RoundedButtom