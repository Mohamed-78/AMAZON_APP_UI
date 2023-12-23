import { StyleSheet, Text, View } from 'react-native';
import Layout from './app/index';
import Home from './components/screens/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <Layout />
  );
}
