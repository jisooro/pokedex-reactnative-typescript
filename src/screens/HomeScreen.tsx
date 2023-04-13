import { Text, Image, FlatList, ActivityIndicator, SafeAreaView, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { usePokemonPagination } from '../hooks/usePokemonPagination'
import PokemonCard from '../components/PokemonCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, loadPokemons, isLoading } = usePokemonPagination();

    return (
        <SafeAreaView style = {{ ...styles.globalMargin, top: top + 20 }}>
            <Image
                source = { require('../assets/pokebola.png') }
                style = { styles.pokeballBG }
            />

            <View
                style = {{ alignItems: 'center' }}
            >
                <FlatList 
                    data = { simplePokemonList }
                    keyExtractor = { (pokemon) => pokemon.id }
                    showsVerticalScrollIndicator = { false }
                    numColumns = { 2 }
                    renderItem = { ({ item }) => (
                        <PokemonCard pokemon = { item } isLoading = { isLoading }/>
                    ) }

                    ListHeaderComponent = {(
                        <Text 
                            style = {{
                                ...styles.title,
                                ...styles.globalMargin,
                                paddingBottom: 10
                            }}
                        >
                            Pokedex
                        </Text>
                    )}

                    onEndReached = { loadPokemons }
                    onEndReachedThreshold = { 0.4 }

                    ListFooterComponent = { 
                        <ActivityIndicator 
                            style = {{ height: 100 }} 
                            size = { 20 }
                            color = 'gray'
                        /> 
                    }
                />
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen