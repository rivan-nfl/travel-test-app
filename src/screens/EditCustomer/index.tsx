import React, { useState } from 'react'
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import MainLayout from '../../layout/MainLayout'
import Header from '../../components/Header/Header'
import { COLORS, SIZING, SPACING } from '../../utils/style'
import Footer from '../../components/Footer/Footer'
import { hp, wp } from '../../utils/dimension';
import CustomButton from '../../components/Button/CustomButton';
import { useDispatch, useSelector } from 'react-redux';

const EditCustomer = ({ navigation }): JSX.Element => {
    const dispatch = useDispatch()
    const dataCustomer = useSelector(state => state)
    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedData, setSelectedData] = useState<any>({});
    const [data, setData] = useState<any>(dataCustomer);

    const handleOnChange = (text: string, item: any) => {
        const newData = [...data]

        newData.splice(newData.indexOf(item), 1, {
            id: item.id,
            name: text,
            gender: item.gender
        })
        
        setData(newData)
    }

    const handleOnChangeGender = (gender: string, item: any) => {
        const newData = [...data]
        newData.splice(newData.indexOf(item), 1, {
            id: item.id,
            name: item.name,
            gender
        })
        setData(newData)
        setModalVisible(!modalVisible)
    }

    const handleOnDelete = (item: any) => {
        const newData = [...data]
        newData.splice(newData.indexOf(item), 1)
        setData(newData)
    }

    const handleAddCustomer = () => {
        setData([...data, {
            id: data.length,
            name: '',
            gender: 'MR'
        }])
    }

  return (
    <>
    <MainLayout>
        <Header type='icon' title='Tambah Data Tamu' navigation={navigation} />
        <ScrollView style={styles.content}>
            <Text style={styles.title}>Detail Pemesan</Text>
            {
                data?.map((item: any, index: number) => (
                    <View key={index} style={styles.customerContainer}>
                        <Pressable style={styles.dropdown} onPress={() => { setModalVisible(!modalVisible); setSelectedData(item) }}>
                            <Text style={styles.dropdownText}>{item.gender}</Text>
                            <IconMaterial name="keyboard-arrow-down" size={wp(5.5)} color={COLORS.BLACK} />
                        </Pressable>
                        <TextInput placeholder='Masukkan nama tamu...' onChangeText={text => handleOnChange(text, item)} defaultValue={item.name} style={styles.txtInput} />
                        <Pressable onPress={() => handleOnDelete(item)}>
                            <Icon name="trash-2" size={wp(7)} color={COLORS.RED} />
                        </Pressable>
                    </View>
                ))
            }
            <Pressable onPress={handleAddCustomer}>
                <Text style={styles.addCustomerText}>+ Tambah Data Tamu</Text>
            </Pressable>
        </ScrollView>
        <Footer style={styles.footer}>
            <CustomButton text='Simpan' onPress={() => { dispatch({type: 'SAVE_CUSTOMERS', data}); navigation.goBack() }} />
        </Footer>
    </MainLayout>

    <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={[styles.modalScreen]}>
            <View style={styles.modalContainer}>
                <Pressable onPress={() => handleOnChangeGender('MR', selectedData)}>
                    <Text style={[styles.modalText, { borderBottomWidth: 1, borderColor: COLORS.GREY }]}>MR</Text>
                </Pressable>
                <Pressable onPress={() => handleOnChangeGender('MRS', selectedData)}>
                    <Text style={styles.modalText}>MRS</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
    </>
  )
}

export default EditCustomer

const styles = StyleSheet.create({
    content: {
        backgroundColor: COLORS.WHITE,
        padding: SPACING.MEDIUM
    },
    title: {
        color: COLORS.BLACK,
        fontSize: SIZING.MEDIUM,
        fontWeight: 'bold',
        marginBottom: SPACING.XLARGE
    },
    customerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(4.8),
        marginBottom: SPACING.LARGE
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.GREY,
        padding: SPACING.SMALL,
        height: '100%'
    },
    dropdownText: {
        color: COLORS.BLUE,
        fontWeight: 'bold',
        fontSize: SIZING.MEDIUM
    },
    txtInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.GREY,
        padding: SPACING.SMALL + 3,
        marginHorizontal: SPACING.LARGE,
        flex: 1,
        fontSize: SIZING.MEDIUM,
        height: '100%',
        color: COLORS.BLACK
    },
    addCustomerText: {
        fontSize: SIZING.MEDIUM,
        color: COLORS.ORANGE,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalContainer: {
        backgroundColor: COLORS.WHITE,
        borderRadius: SPACING.SMALL,
        width: wp(70)
    },
    modalText: {
        color: COLORS.BLACK,
        fontSize: SIZING.LARGE,
        padding: SPACING.MEDIUM,
    },
    footer: {
        padding: SPACING.LARGE,
    }
})