import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Layout from './app/index';
import Home from './components/screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './components/screens/categories/Categories';
import Details from './components/screens/details-product/Details';
import Checkout from './components/screens/checkout/Checkout';
import ProductsCategory from './components/screens/products-category/ProductsCategory';
import Cart from './components/screens/cart/Cart';
import Profile from './components/screens/profile/Profile';
import { icons } from './constants';
import { COLORS } from './constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: '7%',
          shadowOpacity: 0.35,
          shadowRadius: 15.0,
          elevation: 26,
          backgroundColor: 'white', // Fond blanc global
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? icons.homeWhite : icons.homeWhite;
          } else if (route.name === 'Products') {
            iconName = focused ? icons.listWhite : icons.listWhite;
          } else if (route.name === "Cart") {
            iconName = focused ? icons.shoppingWhite : icons.shoppingWhite;
          } else if (route.name === "Profile") {
            iconName = focused ? icons.userWhite : icons.userWhite;
          }

          const iconStyle = {
            backgroundColor: focused ? 'orange' : 'transparent',
            borderRadius: 40,
            padding: 10
          };

          const textStyle ={
            color: focused ? COLORS.medium : COLORS.bold
          }

          return (
            <View style={{ flexDirection: 'row', alignItems: 'center', ...iconStyle }}>
              <Image source={iconName} size={20} style={{ marginRight: 5 }} />
              <Text style={{...textStyle}}>{route.name}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: COLORS.semibold,
        tabBarInactiveTintColor: "#000",
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Home" component={Layout} />
      <Stack.Screen name="Products" component={ProductsCategory} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
