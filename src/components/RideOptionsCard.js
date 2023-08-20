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

    console.log(travelTimeInformation)

    return (
        <SafeAreaView className="bg-white flex-1">
            <View>
                <TouchableOpacity className="absolute top-3 left-5 p-3 z-10" onPress={() => {
                    navigation.goBack()
                }}>
                    <Ionicons name={"chevron-back-circle"} size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-center py-5 text-xl">Select a Ride - {travelTimeInformation?.distance.text}</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            className={`items-center justify-between flex-row px-10 ${item.id === selected?.id && "bg-slate-200"}`}
                            onPress={() => {
                                setSelected(item)
                            }}>
                            <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: item.image }} />

                            <View className="-ml-6">
                                <Text className="text-xl font-semibold">{item.title}</Text>
                                <Text>{travelTimeInformation?.duration.text}</Text>
                            </View>

                            <Text className="text-xl">$99</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <View>
                <TouchableOpacity className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`} disabled={!selected}>
                    <Text className="text-center text-white text-xl">Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})