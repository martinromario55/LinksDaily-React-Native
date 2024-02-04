import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({name}) => {
  return (
    <View>
      <Text>Welcome {name}</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})