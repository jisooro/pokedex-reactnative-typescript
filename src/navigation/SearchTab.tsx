import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "./MainTab";
import SearchScreen from "../screens/SearchScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Tabs = createNativeStackNavigator<RootStackParams>();

const SearchTab = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Tabs.Screen name = 'HomeScreen' component = { SearchScreen } />
            <Tabs.Screen name = 'PokemonScreen' component = { PokemonScreen } />
        </Tabs.Navigator>
    )
}

export default SearchTab;