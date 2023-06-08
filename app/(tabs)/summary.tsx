import { View, Text } from 'react-native';
import React from 'react';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { colors } from '../../theme/Colors';
import RatioDisplay from '../../components/RatioDisplay';
import ShapeDisplay from '../../components/ShapeDisplay'




const Summary = () => {
  return (
    <View style={{backgroundColor: colors.black, flex: 1,  alignItems: "center"}}>
      {/* <RatioDisplay /> */}
      <ShapeDisplay />
    </View>
  )
}

export default Summary