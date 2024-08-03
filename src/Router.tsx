import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HosgeldinEkrani from './Sayfalar/HosgeldinEkrani';
import UyeKaydi from './Sayfalar/UyeKaydi';

const Sayfa = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Sayfa.Navigator>
        <Sayfa.Screen name="Hosgeldin" component={HosgeldinEkrani} options={{headerShown: false}}/>
        <Sayfa.Screen name="Kayit" component={UyeKaydi} options={{headerShown: false}}
        />
      </Sayfa.Navigator>
    </NavigationContainer>
  )
}
