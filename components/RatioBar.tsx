import React from "react";
import { View, Text } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import { colors } from "../theme/Colors";
import { userData } from "../constants/userData";

const RatioGauge = () => {
  const barWidth = 200;
  const barHeight = 30;
  const tickMarkWidth = 1;
  const tickMarkSpacing = barWidth/ 5; // Adjust the number of tick marks here
  const progress = 0.5 ;
  const filledLength = barWidth * progress;
  const grayRectWidth = barWidth - filledLength; // Calculate the width of the gray rectangle
  const grayRectX = filledLength;
  return (
    <View>
      <Svg width={barWidth} height={barHeight}>
        {/* Progress Bar */}
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={colors.white} />
            <Stop offset="25%" stopColor={colors.green} />
            <Stop offset="53%" stopColor={colors.lightBlue} />
            <Stop offset="73%" stopColor={colors.lightBlue} />
            <Stop offset="87%" stopColor={colors.orange} />
            <Stop offset="100%" stopColor={colors.red} />
          </LinearGradient>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={barWidth}
          height={barHeight}
          fill="url(#gradient)"
        />
        <Rect
          x={grayRectX}
          y={0}
          width={grayRectWidth}
          height={barHeight}
          fill="gray"
        />
        {/* Tick Marks */}
        {Array.from({ length: 6 }).map((_, index) => (
          <Rect
            key={index}
            x={index * tickMarkSpacing}
            y={0}
            width={tickMarkWidth}
            height={barHeight}
            fill="gray"
          />
        ))}
      </Svg>
    </View>
  );
};

export default RatioGauge;
