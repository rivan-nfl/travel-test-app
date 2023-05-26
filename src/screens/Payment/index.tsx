import React, { useEffect, useMemo, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useDispatch, useSelector } from 'react-redux';
import StepIndicator from 'react-native-step-indicator';

import CustomerCard from '../../components/Card/CustomerCard';
import Divider from '../../components/Divider/Divider';
import Header from '../../components/Header/Header';
import MainLayout from '../../layout/MainLayout';
import getPaymentDetails from '../../service/apiService';
import { COLORS, SIZING, SPACING } from '../../utils/style';
import OrderDetail from './components/OrderDetail';
import { wp } from '../../utils/dimension';

const Payment = ({ navigation }: any): JSX.Element => {
    const dispatch = useDispatch()
    const dataCustomer = useSelector(state => state)

    const [selectedId, setSelectedId] = useState<string | undefined>();
    const [data, setData] = useState<any | undefined>({})

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: 'Saya memesan untuk sendiri',
            value: 'option1',
            borderColor: COLORS.GREY,
            color: COLORS.BLUE,
            labelStyle: { color: COLORS.BLACK, fontSize: SIZING.MEDIUM - 1 },
            containerStyle: {marginBottom: SPACING.MEDIUM - 1}
        },
        {
            id: '2',
            label: 'Saya memesan untuk orang lain',
            value: 'option2',
            borderColor: COLORS.GREY,
            color: COLORS.BLUE,
            labelStyle: { color: COLORS.BLACK, fontSize: SIZING.MEDIUM - 1 }
        }
    ]), []);

    const [currentPosition, setCurrentPosition] = useState(0)
    const labels = ["Detail Pemesanan", "Pembayaran", "Summary"];
    const customStyles = {
        stepIndicatorSize: wp(6),
        currentStepIndicatorSize: wp(8),
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: COLORS.BLUE,
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: COLORS.BLUE,
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: COLORS.BLUE,
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: COLORS.BLUE,
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: COLORS.BLUE,
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: SIZING.SMALL + 2,
        currentStepLabelColor: COLORS.BLACK
      }

    useEffect(() => {
        getPaymentDetails()
        .then((res: any) => {
            setData(res.hotelDetail);
            dispatch({type: 'SAVE_CUSTOMERS', data: res.customers})
        })
        .catch(err => {
            alert(err)
        })
    }, [])

    return (
        <MainLayout>
            <Header type='icon' title='Payment Details' navigation={navigation} />
            <ScrollView style={styles.container}>
                <StepIndicator
                    customStyles={customStyles}
                    stepCount={labels.length}
                    currentPosition={currentPosition}
                    labels={labels}
                />
                <Divider size={1} />
                <OrderDetail data={data} />
                <Divider size={1} />
                <View style={styles.ordererDetailContainer}>
                    <Text style={styles.title}>Detail Pemesan</Text>
                    <View style={styles.ordererDetail}>
                        <View>
                            <Text style={styles.detailTitle}>Tn. Andreas Andreas</Text>
                            <Text style={styles.detailText} numberOfLines={1}>andreasandreas@gmail.com</Text>
                            <Text style={styles.detailText}>+628 22 2222 2222</Text>
                        </View>
                        <Pressable onPress={() => alert('Ubah Data')} >
                            <Text style={styles.ubahText}>Ubah</Text>
                        </Pressable>
                    </View>
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={setSelectedId}
                        selectedId={selectedId}
                        containerStyle={{ alignItems: 'flex-start', marginBottom: SPACING.XLARGE }}
                    />
                    <Text style={styles.title}>Data Tamu</Text>
                    {
                        dataCustomer?.map((item: any, index: number) => (
                            <CustomerCard key={index} data={item} />
                        ))
                    }
                    <Pressable onPress={() => navigation.navigate('Edit Customer')} >
                        <Text style={[styles.ubahText, { textAlign: 'right' }]}>Ubah Data Tamu</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SPACING.MEDIUM,
        backgroundColor: COLORS.WHITE
    },
    title: {
        color: COLORS.BLACK,
        fontSize: SIZING.MEDIUM,
        fontWeight: 'bold',
        marginBottom: SPACING.XLARGE
    },
    ordererDetailContainer: {
        padding: SPACING.MEDIUM,
        paddingBottom: SPACING.XLARGE
    },
    ordererDetail: {
        padding: SPACING.MEDIUM,
        backgroundColor: COLORS.WHITE,
        elevation: SPACING.SMALL,
        borderRadius: SPACING.SMALL,
        marginBottom: SPACING.XLARGE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailTitle: {
        color: COLORS.BLACK,
        fontSize: SIZING.MEDIUM - 2,
        fontWeight: 'bold',
    },
    detailText: {
        color: COLORS.GREY,
        fontSize: SIZING.MEDIUM - 3,
        fontWeight: 'bold',
    },
    ubahText: {
        textDecorationLine: 'underline',
        color: COLORS.BLUE,
        fontSize: SIZING.MEDIUM
    }
})

export default Payment;