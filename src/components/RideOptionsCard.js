import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../redux/slices/navSlice';

import { Ionicons } from '@expo/vector-icons';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-X-456",
        title: "UberXL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-X-789",
        title: "UberLUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    }
]

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const SURGE_CHARGE_RATE = 1.5
    console.log(travelTimeInformation)

    return (
        <SafeAreaView className="bg-white flex-1">
            <View>
                <TouchableOpacity className="absolute top-3 left-5 p-3 z-10" onPress={() => {
                    navigation.goBack()
                }}>
                    <Ionicons name={"chevron-back-circle"} size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-center py-5 text-xl">{travelTimeInformation?.distance.text} - {travelTimeInformation?.duration.text}</Text>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})