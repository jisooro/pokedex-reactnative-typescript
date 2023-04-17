import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchTab from './SearchTab';
import MainTab from './MainTab';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle = {{
                backgroundColor: 'white'
            }}
            screenOptions = {{
                headerShown: false,
                tabBarActiveTintColor: '#5856D5',
                tabBarLabelStyle: {
                    marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.90)',
                    borderWidth: 0,
                    elevation: 0,
                    height: ( Platform.OS === 'ios' ) ? 80 : 60
                }
            }}
        >
            <Tab.Screen 
                name = "Home" 
                component = { MainTab } 
                options = {{
                    tabBarLabel: "List",
                    tabBarIcon: ({ color }) => 
                        <Icon 
                            color = { color } 
                            size = { 25 }
                            name = 'list-outline'
                        />
                }}
            />
            <Tab.Screen 
                name = "SearchScreen" 
                component = { SearchTab } 
                options = {{
                    tabBarLabel: "List",
                    tabBarIcon: ({ color }) => 
                        <Icon 
                            color = { color } 
                            size = { 25 }
                            name = 'search-outline'
                        />
                }}
            />
        </Tab.Navigator>
    );
}