import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//Redux
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

//Icons
import { AntDesign } from '@expo/vector-icons';

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: 2,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]

const NavOptions = () => {

    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    className="p-2 pl-8 pb-8 pt-4 bg-gray-200 m-2 w-40"
                    onPress={() => { navigation.navigate(item.screen) }}
                    disabled={!origin}
                >
                    <View className={!origin && 'opacity-20'}>
                        <Image source={{ uri: item.image }} style={{ width: 120, height: 120, resizeMode: 'contain' }} />
                        <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                        <AntDesign name="rightcircle" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})