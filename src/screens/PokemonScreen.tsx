import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> {};

const PokemonScreen = ( { navigation, route }: Props ) => {

    const { simplePokemon, color } = route.params;
    const { name, id, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon( id )

    return (
        <View style = {{ flex: 1 }}>
            <View style = {{ ...styles.headerContainer, backgroundColor: color }}>
                <TouchableOpacity
                    activeOpacity = { 0.5 }
                    onPress = { () => navigation.pop() }
                    style = {{
                        ...styles.backButton,
                        top: top + 5
                    }}
                >
                    <Icon
                        name = 'arrow-back-outline'
                        color = 'white'
                        size = { 35 }
                    />
                </TouchableOpacity>
                <Text
                    style = {{
                        ...styles.pokemonName,
                        top: top + 40  
                    }}
                >
                    { name  + '\n'}#{ id }
                </Text>
                <Image 
                    source = { require('../assets/pokebola-blanca.png') }
                    style = { styles.pokeball }
                />

                <FadeInImage 
                    uri = { picture }
                    style = { styles.pokemonImage }
                />
            </View>

            { isLoading ? 
                (
                <View style = { styles.loadingIndicator }>
                    <ActivityIndicator 
                        color = { color }
                        size = { 50 }
                    />

                </View>
                ) : (
                <PokemonDetails pokemon = { pokemon }/>
                )
            }
        </View>
    ) 
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        height: 370,
        zIndex: 999
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 40,
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        alignItems: 'center',
        height: 200,
        flex: 1,
        justifyContent: 'center',
    }
})

export default PokemonScreen;