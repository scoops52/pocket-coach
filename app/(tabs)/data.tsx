import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../theme/Colors';
import ChronicChart from '../../components/ChronicChart';
import ZoneBar from '../../components/ZoneBar';
import RatioGauge from '../../components/RatioGauge'

const data = () => {
  return (
    <View style={{backgroundColor: colors.black, flex: 1,}}>
      <ChronicChart />
      <RatioGauge 
    />
    </View>
  )
}

export default data