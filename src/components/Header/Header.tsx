import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZING, SPACING } from '../../utils/style';
import Icon from 'react-native-vector-icons/Feather';
import { wp } from '../../utils/dimension';

const Header = (): JSX.Element => {
    return (
        <View style={styles.container} >
            <Icon name="arrow-left" size={wp(7)} color={COLORS.WHITE} />
            <Text style={styles.title} >Header</Text>
            <View style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.BLUE,
        paddingVertical: SPACING.LARGE,
        paddingHorizontal: SPACING.MEDIUM
    },
    title: {
        flex: 1,
        color: COLORS.WHITE,
        fontSize: SIZING.LARGE,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icon: {
        width: wp(7),
        height: wp(7)
    }
});

export default Header;