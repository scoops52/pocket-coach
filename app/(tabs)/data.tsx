import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../theme/Colors';
import ChronicChart from '../../components/ChronicChart';
import ZoneBar from '../../components/ZoneBar';
import { userData } from '../../constants/userData';
import HorZoneBar from '../../components/HorZoneBar';
import HeatMap from '../../components/Heatmap';

const data = () => {
  return (
    <View style={{backgroundColor: colors.black, flex: 1,}}>
      <ChronicChart />
      <HeatMap />
    </View>
  )
}

export default data