import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens Imports
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<Stack.Navigator
			screenOptions = {{
				headerShown: false,
				contentStyle: {
					backgroundColor: 'white'
				},
			}}
		>
			<Stack.Screen name = 'Home' component = { HomeScreen }/>
			<Stack.Screen name = 'Pokemon' component = { PokemonScreen }/>
		</Stack.Navigator>
	)
}

export default Navigator