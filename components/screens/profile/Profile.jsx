import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
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
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.p10}>
        <View style={styles.p7}>
          <View style={styles.menuBox}>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.shoppingbag} style={styles.iconSize} />
                <Text style={styles.boxText}>Your Orders</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.history} style={styles.iconSize} />
                <Text style={styles.boxText}>Pucharge History</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.tasklist} style={styles.iconSize} />
                <Text style={styles.boxText}>Product Lists</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.p7}>
          <View style={styles.menuBox}>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.chat} style={styles.iconSize} />
                <Text style={styles.boxText}>Reviews</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.bell} style={styles.iconSize} />
                <Text style={styles.boxText}>Notifications</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.people} style={styles.iconSize} />
                <Text style={styles.boxText}>Friends & Subcribes</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.p7}>
          <View style={styles.menuBox}>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.placeholder} style={styles.iconSize} />
                <Text style={styles.boxText}>Delevery Addresses</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.wallet} style={styles.iconSize} />
                <Text style={styles.boxText}>Your Wallets</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.boxElementPosition}>
              <View style={styles.boxElementPosition}>
                <Image source={icons.settings} style={styles.iconSize} />
                <Text style={styles.boxText}>Settings</Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.chevron} style={styles.iconSize} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
