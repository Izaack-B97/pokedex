import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
                component={ SearchScreen } 
                options={{
                    tabBarLabel: 'Busqueda',
                    tabBarIcon: ({ color }) => <Ionicons name='search-outline' color={ color } size={ 25 }/>
                }}
            />
        </Tab.Navigator>
    )
}
