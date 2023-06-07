import { View, Text } from 'react-native'
import React from 'react'
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { colors } from '../../theme/Colors';
import RatioDisplay from '../../components/RatioDisplay';




const summary = () => {
  return (
    <View style={{backgroundColor: colors.black, flex: 1,}}>
      <RatioDisplay />
    </View>
  )
}

export default summary