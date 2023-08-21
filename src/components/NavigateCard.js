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

                {/* <NavFavourites /> */}

            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})