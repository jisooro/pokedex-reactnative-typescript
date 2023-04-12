import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const App = () => {
	return (
		<NavigationContainer>
			<Navigator/>
		</NavigationContainer>
	)
}

export default App