import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {

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
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})