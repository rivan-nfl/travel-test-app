import React from 'react'
import { View } from 'react-native'

const Divider = ({ size = 0 }): JSX.Element => {
    return <View style={{ width: '100%', height: size, backgroundColor: 'rgba(0,0,0,0.1)' }} />
}

export default Divider;