import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect, Stack } from 'expo-router'

const Home = () => {
  return (
    <Redirect href="/summary"/>
  )
}

export default Home