import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons/';
import { useDebounceValue } from '../hooks/useDebouncedValue';

interface Props {
    style ?: StyleProp<ViewStyle>,
    onDebounced: ( value : string ) => void
}

export const SearchInput = ( { style, onDebounced } : Props ) => {

    const [ textValue, setTextValue ] = useState('');

    const { debouncedValue } = useDebounceValue( textValue );

    useEffect(() => {
        onDebounced( debouncedValue);
    }, [ debouncedValue ])

    return (
        <View style={{
            ...styles.container,
            ...style as any
        }}>
            <View style={ styles.textBackground }>
                <TextInput 
                    placeholder='Buscar pokémon...'
                    autoCapitalize='none'
                    autoCorrect={ false }
                    style={ styles.textInput }
                    value={ textValue }
                    onChangeText={ setTextValue }
                />
                <TouchableOpacity activeOpacity={ 0.5 }>
                    <Ionicons name='search-outline' color='black' size={ 25 } style={{ marginRight: 10 }}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'red'
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 20,
    },
    textInput: {
        fontSize: 20,
        flex: 1,
    },
});
