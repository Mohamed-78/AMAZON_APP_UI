import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './normalbuttom.style'

const NormalButtom = ({buttonTitle}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NormalButtom