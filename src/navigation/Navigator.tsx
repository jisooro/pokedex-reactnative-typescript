import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens Imports
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
	HomeScreen: undefined,
	PokemonScreen: { simplePokemon: SimplePokemon, color: string },
}

const Stack = createNativeStackNavigator<RootStackParams>();

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
			<Stack.Screen name = 'HomeScreen' component = { HomeScreen }/>
			<Stack.Screen name = 'PokemonScreen' component = { PokemonScreen }/>
		</Stack.Navigator>
	)
}

export default Navigator