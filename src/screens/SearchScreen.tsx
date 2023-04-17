import { View, Text, Platform, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
    
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [ pokemonFiltered, setPokemonFiltered ] = useState<SimplePokemon[]>([])
    const [ term, setTerm ] = useState('');

    useEffect(() => {
        
        if ( term.length === 0 ) {
            return setPokemonFiltered([]);
        }

        if ( isNaN( Number(term) ) ) {
            setPokemonFiltered(
                simplePokemonList.filter( 
                    (poke) => poke.name.toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase()) 
                    )
            )
        } else {
            const pokemonID = simplePokemonList.find(poke => poke.id === term);
            setPokemonFiltered( (pokemonID) ? [pokemonID] : [] )
        }

        
    }, [term])
    

    if( isFetching ) {
        return <Loading />
    }

    return (
        <View 
            style = {{ 
                flex: 1,
                marginHorizontal: 20, 
            }}
        >
            <SearchInput 
                onDebounce = { setTerm }
                style = {{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: ( Platform.OS === 'ios' ) ? top + 10 : top + 30
                }}
            />

            <FlatList 
                data = { pokemonFiltered }
                keyExtractor = { (pokemon) => pokemon.id }
                showsVerticalScrollIndicator = { false }
                numColumns = { 2 }
                renderItem = { ({ item }) => (
                    <PokemonCard pokemon = { item } />
                ) }

                ListHeaderComponent = {(
                    <Text 
                        style = {{
                            ...styles.globalMargin,
                            fontSize: 20,
                            paddingBottom: 10,
                            marginTop: ( Platform.OS === 'ios' ) ? top + 60 : top + 80
                        }}
                    >
                        Results of { term }
                    </Text>
                )}
            />

        </View>
    )
}

export default SearchScreen