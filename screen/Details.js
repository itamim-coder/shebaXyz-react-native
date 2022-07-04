import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const item = route.params.item; 
  return (
    <View>
      <Text>{item.category}</Text>
      <Text>ookkk</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})