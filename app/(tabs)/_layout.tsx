import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="summary" />
        <Tabs.Screen name="data" />
        <Tabs.Screen name="profile" />
    </Tabs>
  )
}

export default _layout