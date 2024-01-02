import { StyleSheet, Text, View } from 'react-native';
import Layout from './app/index';
import Home from './components/screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './components/screens/categories/Categories';
import Details from './components/screens/details-product/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Layout} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
