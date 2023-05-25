import moment from 'moment';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import IconFoundation from 'react-native-vector-icons/Foundation';
import { wp } from '../../../utils/dimension';
import { COLORS, SIZING, SPACING } from '../../../utils/style'
import CardOrderDetail from './CardOrderDetail';

const OrderDetail = ({ data }: any): JSX.Element => {

    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>Detail Pesanan</Text>
            <CardOrderDetail data={data} />
            <View style={styles.textCheckContainer}>
                <Text style={styles.textCheck}>Check-In</Text>
                <Text style={styles.textCheckDate}>{moment(new Date(data?.checkInDate)).format('DD MMMM YYYY')}</Text>
            </View>
            <View style={styles.textCheckContainer}>
                <Text style={styles.textCheck}>Check-Out</Text>
                <Text style={styles.textCheckDate}>{moment(new Date(data?.checkOutDate)).format('DD MMMM YYYY')}</Text>
            </View>
            {
                data?.refundable && (
                    <View style={styles.refundContainer}>
                        <IconFoundation name="dollar" size={wp(6)} color={COLORS.ORANGE} />
                        <Text style={styles.refundText}>Dapat direfund jika dibatalkan</Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACING.MEDIUM,
        paddingVertical: SPACING.LARGE,
    },
    title: {
        color: COLORS.BLACK,
        fontSize: SIZING.MEDIUM,
        fontWeight: 'bold',
        marginBottom: SPACING.XLARGE
    },
    textCheckContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.MEDIUM
    },
    textCheck: {
        color: COLORS.BLACK,
        fontSize: SIZING.MEDIUM - 1,
        fontWeight: 'bold',
    },
    textCheckDate: {
        color: COLORS.GREY,
        fontSize: SIZING.MEDIUM - 2,
    },
    refundContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    refundText: {
        color: COLORS.ORANGE,
        fontSize: SIZING.MEDIUM - 1,
        fontWeight: 'bold',
        marginLeft: SPACING.SMALL
    }
})

export default OrderDetail;