import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'

interface Props {
    pokemon : PokemonFull 
}

export const PokemonDetails = ( { pokemon } : Props ) => {
    
    console.log( pokemon.types );
    
    return (
        <ScrollView style={{ ...StyleSheet.absoluteFillObject }} showsVerticalScrollIndicator={ false }>
            <View style={ styles.container }>
                {/* Types */}
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={ styles.title }>Types</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        {
                            pokemon.types.map(pokemon => (
                                <Text key={ pokemon.type.name } style={ styles.regularText }> { pokemon.type.name }</Text>
                            ))
                        }
                    </View>
                </View>
                {/* Peso */}
                <View style={ styles.containerSection }>
                    <Text style={ styles.title }>Peso</Text>
                    <Text style={ styles.regularText }> { pokemon.weight }kg</Text>
                </View>
                {/* Sprites */}
                <View style={ styles.containerSection }>
                    <Text style={ styles.title }>Sprites</Text>
                </View>
                <ScrollView
                    // Style
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }

                >
                    <FadeInImage uri={ pokemon.sprites.front_default } style={ styles.basicSprite }/>
                    <FadeInImage uri={ pokemon.sprites.back_default } style={ styles.basicSprite }/>
                    <FadeInImage uri={ pokemon.sprites.front_shiny } style={ styles.basicSprite }/>
                    <FadeInImage uri={ pokemon.sprites.back_shiny } style={ styles.basicSprite }/>
                </ScrollView>
                {/* Habilidades */}
                <View style={ styles.containerSection }>
                    <Text style={ styles.title }>Habilitades base</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        {
                            pokemon.abilities.map(pokemon => (
                                <Text key={ pokemon.ability.name } style={ styles.regularText }> { pokemon.ability.name }</Text>
                            ))
                        }
                    </View>
                </View>
                {/* Movimientos */}
                <View style={ styles.containerSection }>
                    <Text style={ styles.title }>Movimientos</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' ,marginTop: 5 }}>
                        {
                            pokemon.moves.map(pokemon => (
                                <Text key={ pokemon.move.name } style={ styles.regularText }> { pokemon.move.name }</Text>
                            ))
                        }
                    </View>
                </View>
                {/* Stats */}
                <View style={ styles.containerSection }>
                    <Text style={ styles.title }>Stats</Text>
                    <View style={{ marginTop: 5 }}>
                        {
                            pokemon.stats.map(pokemon => (
                                <View key={ pokemon.stat.name } style={{ flexDirection: 'row' }}>
                                    <Text style={{ ...styles.regularText, width: 150 }}> { pokemon.stat.name }</Text>
                                    <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>{ pokemon.base_stat }</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                {/* Sprite final */}
                <View style={{ marginBottom: 20, alignItems: 'center' }} >
                    <FadeInImage uri={ pokemon.sprites.front_default } style={ styles.basicSprite }/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 380
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    regularText: {
        fontSize: 19
    },
    containerSection: {
        marginTop: 20,
        marginHorizontal: 20
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});