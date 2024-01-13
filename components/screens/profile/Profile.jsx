import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./profile.style";
import { icons, images } from "../../../constants";

const Profile = () => {
  return (
    <>
      <View style={styles.headerHeight}>
        <View style={styles.displayPosition}>
          <View style={styles.headerPosition}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={images.user}
                resizeMode="cover"
                style={styles.imageSize}
              />
            </TouchableOpacity>
            <View style={styles.userInformations}>
              <Text style={styles.userName}>Alexander Borento</Text>
              <Text style={styles.userEmail}>alexander@mail.com</Text>
            </View>
          </View>
          <Image
            source={icons.searchsymbol}
            resizeMode="cover"
            style={styles.iconSize}
          />
        </View>
      </View>
      <View>
        <View style={styles.boxElementPosition}>
          <View style={styles.boxElementPosition}>
            <Image source={icons.add} />
            <Text style={styles.boxText}>Your Orders</Text>
          </View>
          <View>
            <Image source={icons.chevron} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
