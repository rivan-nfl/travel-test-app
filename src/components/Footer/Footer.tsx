import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = ({ children, style }: any): JSX.Element => {
  return (
    <View style={[style]}>
      { children }
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})