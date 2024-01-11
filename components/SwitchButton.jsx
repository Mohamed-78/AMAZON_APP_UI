import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

const SwitchButton = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    switchButtonContainer: {
      width: '90%',
      alignSelf: 'center',
      marginTop: 50,
      height: 60,
    //   borderWidth: 0.5,
      backgroundColor: 'transparent',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 5,
      paddingRight: 5,
    },
    touchable: {
      flex: 1,
      height: 45,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTouchable: {
      fontSize: 18,
      fontWeight: '700',
    },
    elementContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchButtonContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.touchable,
              {
                backgroundColor: selectedTab === index ? COLORS.semibold : 'transparent',
              },
            ]}
            onPress={() => handleTabPress(index)}>
            <Text
              style={[
                styles.textTouchable,
                {
                  color: selectedTab === index ? '#fff' : '#000',
                },
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.elementContainer}>
        {React.cloneElement(tabs[selectedTab].content, {})}
      </View>
    </View>
  );
};

export default SwitchButton;
