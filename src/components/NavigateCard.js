import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

//Expo
import { Ionicons } from '@expo/vector-icons';

//Redux
import { setDestination } from '../redux/slices/navSlice';
import { useDispatch } from 'react-redux';

//Api
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'

//Components
import NavFavourites from './NavFavourites';

const NavigateCard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView className="bg-white flex-1">
            <Text className="text-center py-5 text-xl">Good Morning</Text>
            <View className="border-t border-gray-200 flex-shrink">
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where To?'
                        styles={{
                            container: {
                                flex: 0,
                                backgroundColor: 'white',
                                paddingTop: 20
                            },
                            textInput: {
                                fontSize: 18,
                                borderRadius: 0,
                                backgroundColor: '#DDDDDF'
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0
                            }
                        }}
                        minLength={2}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            // console.log(data, details);

                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate('RideOptionsCard')

                        }}
                        fetchDetails={true}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        debounce={400}
                    />
                </View>

                <NavFavourites />

                <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
                    <TouchableOpacity className="flex flex-row bg-black w-24 px-4 py-3 rounded-full items-center justify-between" onPress={() => {
                        navigation.navigate('RideOptionsCard')
                    }}>
                        <View className="items-center">
                            <Ionicons name={"car"} size={22} color="white" />
                        </View>

                        <Text className="text-white text-center">Rides</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex flex-row bg-white w-24 px-4 py-3 rounded-full items-center justify-between">
                        <View className="items-center">
                            <Ionicons name={"fast-food-outline"} size={22} color="black" />
                        </View>

                        <Text className="text-black text-center">Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})