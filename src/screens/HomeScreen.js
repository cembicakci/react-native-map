import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { useDispatch } from 'react-redux';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'

import NavOptions from '../components/NavOptions'
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="p-5">
                <Image source={{ uri: "https://links.papareact.com/gzs" }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />

                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18
                        }
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        // console.log(data, details);

                        console.log(details)

                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))

                    }}
                    fetchDetails={true}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    debounce={400}
                />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})