import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style = { styles.activityContainer }>
            <ActivityIndicator
                size = { 50 }
                color = 'red'
            />
            <Text style = {{ marginTop: 20, fontWeight: 'bold' }}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Loading;