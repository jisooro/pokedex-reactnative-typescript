import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Button } from 'react-native'
import React from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity = { 0.9 }
        >
            <View style = {{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
                <View>
                    <Text 
                        style = { styles.name } 
                    >
                        { pokemon.name }
                        { '\n#' + pokemon.id }
                    </Text>
                </View>

                <View style = { styles.pokeballContainer }>
                    <Image 
                        source = { require('../assets/pokebola-blanca.png') }
                        style = { styles.pokeball }
                    />
                </View>

                <FadeInImage
                    uri = { pokemon.picture }
                    style = { styles.pokemonImage }
                />
            </View>  

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        height: 120,
        marginBottom: 25,
        marginHorizontal: 10,
        width: 160,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        opacity: 0.5,
        overflow: 'hidden',
    },
    pokeball: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: -20,
        bottom: -20
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -8,
    }
})

export default PokemonCard