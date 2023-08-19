import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import Map from '../components/Map'

const Stack = createNativeStackNavigator();

const MapScreen = () => {
    return (
        <View>
            <View className="h-1/2">
                <Map />
            </View>
            <View className="h-1/2">

                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
                    <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
                </Stack.Navigator>

            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})