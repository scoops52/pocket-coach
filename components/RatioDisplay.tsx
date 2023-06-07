import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/Colors'
import { Svg, Polygon } from 'react-native-svg'

const RatioDisplay = () => {
  return (
    <View>
      <Svg
        width={200}
        height={200}
        style={styles.container}
      >
        <Polygon
          points="50,20 150,20 200,100 150,180 50,180 0,100"
          stroke={colors.lightBlue}
          strokeWidth={2}
        />
        <View style={styles.container}>
          <Text style={{color: colors.lightBlue, fontSize: 22}}>Ratio</Text>
          <Text style={{color: colors.lightBlue, fontSize: 62}}>1.8</Text>
        </View>
        
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default RatioDisplay