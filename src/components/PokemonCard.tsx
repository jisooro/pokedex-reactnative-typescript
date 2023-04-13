import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigator';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon,
    isLoading: boolean,
}

const PokemonCard = ({ pokemon, isLoading }: Props) => {

    const [ bgColor, setBgColor ] = useState('gray');
    const isMounted = useRef(true);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const addBgColor = () => {
        return ImageColors.getColors( pokemon.picture, { fallback: bgColor })
    }

    useEffect(() => {

        addBgColor().then( colors => {
            if (!isMounted.current) return; 

            switch ( colors.platform ) {
                case 'android':
                    setBgColor( colors.dominant || bgColor )
                    break;
                case 'ios':
                    setBgColor( colors.background || bgColor )
                    break;
                case 'web':
                    setBgColor( colors.dominant || bgColor )
                    break;
                }
        })

        return () => {
            isMounted.current = false
        }
    }, [])
    

    return (
        <TouchableOpacity
            activeOpacity = { 0.9 }
            onPress = { 
                () => navigation.navigate('PokemonScreen', {
                simplePokemon: pokemon,
                color: bgColor
            }) }
        >
            <View 
                style = {{ 
                    ...styles.cardContainer, 
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor 
                }}
            >
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