import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParams, StackNavigator } from './StackNavigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonScreen } from '../screens/PokemonScreen';



const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Component = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { 
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab2.Screen name="SearchScreen" component={ SearchScreen } />
            <Tab2.Screen name="PokemonScreen" component={ PokemonScreen } />
        </Tab2.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            tabBarOptions={{
                // activeBackgroundColor: 'red'
                activeTintColor: 'red',
                labelStyle: {
                    fontSize: 15,
                    marginBottom: ( Platform.OS === 'android' ) ? 10 : 0,
                },
                style: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255, 0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: ( Platform.OS === 'android' ) ? 60 : 85
                } 
                
            }}
        >
            <Tab.Screen 
                name="StackNavigator" 
                component={ StackNavigator } 
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => <Ionicons name='list-outline' color={ color } size={ 25 }/>
                }}
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={ Tab2Component } 
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => <Ionicons name='search-outline' color={ color } size={ 25 }/>
                }}
            />
        </Tab.Navigator>
    )
}
