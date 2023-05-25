import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS, SIZING, SPACING } from '../../utils/style';
import { wp } from '../../utils/dimension';

const CustomerCard = ({ data }: any): JSX.Element => {
  return (
    <View style={styles.container}>
        <Icon name="user" size={wp(5.5)} color={COLORS.BLACK} />
        <Text style={styles.text}>{data?.gender}. {data?.name}</Text>
    </View>
  )
}

export default CustomerCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.LARGE,
        backgroundColor: COLORS.WHITE,
        elevation: SPACING.SMALL,
        borderRadius: SPACING.SMALL,
        marginBottom: SPACING.LARGE
    },
    text: {
        marginLeft: SPACING.MEDIUM,
        fontWeight: 'bold',
        color: COLORS.BLACK,
        fontSize: SIZING.MEDIUM - 1,
    }
})