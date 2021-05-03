import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginator } from '../hooks/usePokemonPaginator';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();

    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginator();

    // console.log( simplePokemonList )

    return (
        <>
            <Image 
                source={ require('../../assets/pokebola.png') }
                style={ styles.pokebolaBG }
            />
            <View style={{ ...styles.globalMargin, flex:1, alignItems:'center' }}>
                <FlatList
                    data={ simplePokemonList }
                    keyExtractor={ ( item ) => item.id }
                    renderItem={ ({ item : pokemon }) => <PokemonCard pokemon={ pokemon } />}
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }
                    ListHeaderComponent={ <Text style={{ ...styles.title, marginLeft: 10 , marginTop: top + 20, marginVertical: 10 }} >Pokedex</Text> }
                    ListFooterComponent={ 
                        <View>
                            <ActivityIndicator style={{ height: 80 }} size={40} color='grey'/>
                        </View> 
                    }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                />
            </View>
        </>
    )
}
