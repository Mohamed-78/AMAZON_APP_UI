import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { icons, images } from '../../constants';
import styles from './header.style';
import SearchBar from '../searchbar/SearchBar';

const Header = ({ leftElement, rightElement, width, height, iconSize, showIconBackground, onPressLeft }) => {
  return (
    <View style={styles.headerHeight}>
      <View style={styles.displayPosition}>
        {leftElement && 
        <TouchableOpacity onPress={onPressLeft || (() => {})}>
          <Image source={leftElement} resizeMode="cover" style={{ width, height }} />
        </TouchableOpacity>
        }
        {rightElement && (
          <>
            {showIconBackground && (
              <TouchableOpacity>
                <View style={styles.iconBackgroundColor}>
                  <Image source={rightElement} resizeMode="cover" style={{ width: iconSize, height: iconSize }} />
                </View>
              </TouchableOpacity>
            )}
            {!showIconBackground && (
              <TouchableOpacity>
                <Image source={rightElement} resizeMode="cover" style={{ width: iconSize, height: iconSize }} />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <View>
        <SearchBar />
      </View>
    </View>
  );
};

export default Header;