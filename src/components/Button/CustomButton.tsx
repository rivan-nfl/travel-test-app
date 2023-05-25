import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZING, SPACING } from '../../utils/style'

const CustomButton = ({ text = 'Button', onPress }: any): JSX.Element => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE,
    padding: SPACING.MEDIUM,
    borderRadius: SPACING.SMALL + 2
  },
  text: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: SIZING.LARGE
  }
})