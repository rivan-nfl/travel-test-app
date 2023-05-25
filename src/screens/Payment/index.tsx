import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/Header/Header';
import MainLayout from '../../layout/MainLayout';

const Payment = (): JSX.Element => {
    return (
        <MainLayout>
            <Header />
            <Text>Payment</Text>
        </MainLayout>
    )
}

export default Payment;