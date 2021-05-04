import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/core';

const { width : widthWindow } = Dimensions.get('window');

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ( { pokemon } : Props ) => {

    const [ bgColor, setBgColor ] = useState('red');
    const navigation = useNavigation();
    const isMounted = useRef( true )

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }    
    }, [])

    return (
        <TouchableOpacity activeOpacity={ 0.9 } onPress={ () => navigation.navigate('PokemonScreen', { simplePokemon: pokemon }) } >
            <View style={{
                ...styles.cardContainer, 
                width: widthWindow * 0.4,
                backgroundColor: bgColor
            }}>
                <View>
                    <Text 
                        style={{ 
                            ...styles.name 
                        }}
                    >
                        { pokemon.name }
                        { '\n#' + pokemon.id }
                    </Text>
                </View>
                <View style={ styles.pokemonContainer }>
                    <Image source={ require('../../assets/pokebola-blanca.png') } style={ styles.pokebola }/>
                </View>
                <FadeInImage uri={ pokemon.picture } style={ styles.pokemonImage }/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 100,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    name:{
        color: 'white',
        fontSize: 20,
        top: 20,
        left: 10,
        textTransform: 'capitalize'
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -15,
        right: -15
        
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -6,
        right: -8
    },
    pokemonContainer: {
        // backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5,
        overflow: 'hidden'
    }
});