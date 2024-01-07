import React from 'react';
import { View, Image } from 'react-native';
import { icons, images } from '../../constants';
import styles from './header.style';
import SearchBar from '../searchbar/SearchBar';

const Header = ({ leftElement, rightElement, width, height, iconSize, showIconBackground }) => {
  return (
    <View style={styles.headerHeight}>
      <View style={styles.displayPosition}>
        {leftElement && <Image source={leftElement} resizeMode="cover" style={{ width, height }} />}
        {rightElement && (
          <>
            {showIconBackground && (
              <View style={styles.iconBackgroundColor}>
                <Image source={rightElement} resizeMode="cover" style={{ width: iconSize, height: iconSize }} />
              </View>
            )}
            {!showIconBackground && (
              <Image source={rightElement} resizeMode="cover" style={{ width: iconSize, height: iconSize }} />
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