import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import IconFoundation from 'react-native-vector-icons/Foundation';
import { wp } from '../../../utils/dimension';
import { COLORS, SIZING, SPACING } from '../../../utils/style'

const CardOrderDetail = ({ data }: any): JSX.Element => {
    return (
        <View style={[styles.container]}>
            <Image
                source={{ uri: data?.image || 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg?quality=75&auto=webp'}}
                style={[styles.image, { width: wp(16), height: wp(16) }]}
            />
            <View>
                <Text style={styles.detailTitle}>{data?.hotelName}</Text>
                <Text style={styles.detailText} numberOfLines={1}>{data?.roomName} with Breakfast</Text>
                <Text style={styles.detailText}>{data?.room} Kamar • Quadruple • {data?.guest} Tamu • 10 Malam</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.MEDIUM,
        backgroundColor: COLORS.WHITE,
        elevation: SPACING.SMALL,
        borderRadius: SPACING.SMALL,
        flexDirection: 'row',
        marginBottom: SPACING.MEDIUM
    },
    image: {
        borderRadius: SPACING.SMALL,
        marginRight: SPACING.MEDIUM
    },
    detailTitle: {
        color: COLORS.BLUE,
        fontSize: SIZING.MEDIUM - 2,
        fontWeight: 'bold',
    },
    detailText: {
        color: COLORS.GREY,
        fontSize: SIZING.MEDIUM - 3,
        fontWeight: 'bold',
    },
})

export default CardOrderDetail;