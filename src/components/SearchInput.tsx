import { View, Text, StyleSheet, TextInput, Platform, StyleProp, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import useDebouncedValue from '../hooks/useDebouncedValue'

interface Props {
    onDebounce: ( value: string ) => void,
    style?: StyleProp<ViewStyle>
}

const SearchInput = ({ onDebounce, style  }: Props) => {

    const [ textValue, setTextValue ] = useState('');

    const debouncedValue = useDebouncedValue( textValue, 1500 );

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])
    

    return (
        <View 
            style = {{ 
                ...styles.container, 
                ...style as any
            }}
        >
            <View style = { styles.textBackground }>
                <TextInput 
                    placeholder = 'Search Pokemon'
                    style = {{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize = 'none'
                    autoCorrect = { false }
                    value = { textValue }
                    onChangeText = { setTextValue }
                    cursorColor = 'red'
                />
                <Icon 
                    name = 'search-outline'
                    color = 'grey'
                    size = { 20 }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    textBackground: {
        alignItems: 'center',
        backgroundColor: '#F3F1F3',
        borderRadius: 20,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
})

export default SearchInput