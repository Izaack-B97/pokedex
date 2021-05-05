import React, { useEffect, useState } from 'react'
import { Text, View, Platform } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/useSearchPokemon';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const [ termino, setTermino] = useState('');
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [ pokemonesFiltrados, setPokemonesFiltrados] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if ( termino.length === 0 ) setPokemonesFiltrados([]);
        
        if ( termino.length >= 1 ) {
            
            if ( isNaN( Number(termino) ) ) {
                const pokemonsSearching = simplePokemonList.filter(({ name }) => name.toLocaleLowerCase().includes( termino.toLocaleLowerCase() ));                
                setPokemonesFiltrados( pokemonsSearching );
            } else {
                setPokemonesFiltrados([ simplePokemonList.find(({ id }) => id === termino) !]);
            }
        }

    }, [ termino ])

    if ( isFetching ) return <Loading />;

    return ( 
        <View style={{ 
            flex: 1, 
            // marginTop: ( Platform.OS === 'ios' ? top : 20) ,
            ...styles.globalMargin
        }}>
            <SearchInput 
                style={{
                    position: 'absolute',
                    width: '100%',
                    zIndex: 999,
                    top: ( Platform.OS === 'ios' ) ? top + 5 : 20
                }}
                onDebounced={ setTermino }
            />
            <FlatList
                data={ pokemonesFiltrados }
                keyExtractor={ ( item ) => item.id }
                renderItem={ ({ item : pokemon }) => <PokemonCard pokemon={ pokemon } />}
                ListHeaderComponent={ 
                    <Text style={{ 
                            ...styles.title, 
                            marginLeft: 10, 
                            marginBottom: 10, 
                            marginTop: ( Platform.OS === 'ios' ) ? top + 70 : 80
                        }} 
                    >
                        { termino }
                    </Text> }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
            />

        </View>
    )
}
