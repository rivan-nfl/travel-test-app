import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZING, SPACING } from '../../utils/style';
import Icon from 'react-native-vector-icons/Feather';
import { wp } from '../../utils/dimension';

const Header = ({ type = '', title = 'Header', style = {}, navigation }: any): JSX.Element => {
    return (
        <View style={[styles.container, style]} >
            { type == 'icon' && 
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={wp(6)} color={COLORS.WHITE} />
                </Pressable>
            }
            <Text style={styles.title} >{title}</Text>
            { type == 'icon' && <View style={styles.icon} /> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BLUE,
        paddingHorizontal: SPACING.MEDIUM
    },
    title: {
        flex: 1,
        color: COLORS.WHITE,
        fontSize: SIZING.LARGE,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: SPACING.LARGE,
    },
    icon: {
        width: wp(6),
        height: wp(6)
    }
});

export default Header;