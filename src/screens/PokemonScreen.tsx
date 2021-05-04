import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStackParams } from '../navigator/StackNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons/';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ( { navigation, route } : Props ) => {

    const { simplePokemon } = route.params;
    const { top } = useSafeAreaInsets();

    const { id, name, picture } = simplePokemon;

    const { isLoading, pokemon } = usePokemon(id);

    // console.log( pokemon )

    return (
        <View style={{ flex:  1 }}>
            {/* Header container */}
            <View style={ styles.headerContainer }>
                {/* Backbuttonm */}
                <View>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={{ marginLeft: 15, marginTop: top } }
                        onPress={() => navigation.pop()}
                    >
                        <Ionicons name="arrow-back-outline" size={35} color="white" />
                    </TouchableOpacity>
                    <Text style={ styles.pokemonName }>{ name + '\n'}#{ id }</Text>
                </View>
                <View  style={ styles.imageContainer }>
                    <Image source={ require('../../assets/pokebola-blanca.png') }  style={ styles.pokeballImage } />
                    <FadeInImage uri={ picture } style={ styles.imagePokemon }/>
                </View>
            </View>
            {
                isLoading 
                    ? 
                        (
                            <View style={ styles.loadingIndicator }>
                                <ActivityIndicator color='grey' size={ 50 }/>
                            </View>
                        )
                    : <PokemonDetails pokemon={ pokemon }/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'red',
        height: 370,
        zIndex: 999,
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    pokemonName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        textTransform: 'capitalize'
    },
    imageContainer: {
        alignItems: 'center',
    },
    pokeballImage: {
        width: 200,
        height: 200,
        opacity: 0.7,
        position: 'absolute',
        top: -25
    },
    imagePokemon: {
        width: 240,
        height: 240,
        position: 'absolute',        
    },
    loadingIndicator: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});