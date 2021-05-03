import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core';

export const PokemonScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>PokemonScreen</Text>
            <Button title='Regresar' onPress={ () => navigation.goBack() }/>
        </View>
    )
}
