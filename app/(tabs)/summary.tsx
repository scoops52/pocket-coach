import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { colors } from '../../theme/Colors';
import ShapeDisplay from '../../components/ShapeDisplay'
import ChronicChart from '../../components/ChronicChart';
import RatioGauge from '../../components/RatioGauge';
import RatioBar from '../../components/RatioBar'




const Summary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryDisplayContainer}>
        <ShapeDisplay />
      </View>
      <View>
        <RatioBar />
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Lorem</Text>
        <Text style={styles.summary}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ea, quisquam ullam eveniet veritatis, atque nisi sunt ratione error laborum vero reprehenderit consectetur? Quibusdam, eum? Id, quisquam! Quas, reprehenderit architecto?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black, 
    flex: 1,  
    alignItems: "center",
    gap: 30
  },
  summaryDisplayContainer: {
    marginTop: 30,
    borderColor: colors.lightBlack,
    borderBottomWidth: 2,
  },
  summaryContainer: {
    padding: 10,
    borderColor: colors.white,
    borderRadius: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  summaryTitle: {
    fontSize: 22,
    color: colors.lightBlue,
    marginBottom: 10,
  },
  summary: {
    color: colors.gray
  }
})

export default Summary