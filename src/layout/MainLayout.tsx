import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../utils/style'

const MainLayout = ({ children }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        flex: 1
    }
})

export default MainLayout;