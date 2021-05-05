import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
    return (
        <View style={ styles.containerActivityIndicator }>
            <ActivityIndicator size={ 50 } color='grey' />
            <Text>Cargando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerActivityIndicator: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
});