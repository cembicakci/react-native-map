import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

const NavFavourites = () => {

    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "Code Street, London, UK"
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "London Eye, London, UK"
        }
    ]

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
                return (
                    <View className="bg-gray-200 h-1" />
                )
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity className="items-center p-5 flex-row">
                        <View className="mr-4 rounded-full bg-gray-300 p-3 ">
                            <Ionicons name={item.icon} size={22} color="white" />
                        </View>

                        <View>
                            <Text className="font-semibold text-lg">{item.location}</Text>
                            <Text className="text-gray-500">{item.destination}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})