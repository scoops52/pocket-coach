import React from "react";
import { View, Text } from "react-native";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";
import { colors } from "../theme/Colors";
import { userData } from "../constants/userData";

const RatioGauge = () => {
  // Calculate the semi-circle path
  const radius = 60;
  const cx = 65;
  const cy = 70;
  const startAngle = Math.PI * 1.5;
  const endAngle = Math.PI * 0.5;
  const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";

  const path = `
    M ${cx + radius} ${cy}
    A ${radius} ${radius} 0 ${largeArcFlag} 0 ${cx - radius} ${cy}
  `;

  // Calculate the strokeDashoffset
  const value =  0.9 / 2 ;
  const totalCircleLength = Math.PI * radius;
  const strokeDashoffset = (value - 1) * totalCircleLength;

  return (
    <View>
      <Svg width={150} height={150}>
        {/* Semi-Circle */}
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={colors.green} />
            <Stop offset="25%" stopColor={colors.green} />
            <Stop offset="53%" stopColor={colors.lightBlue} />
            <Stop offset="73%" stopColor={colors.lightBlue} />
            <Stop offset="87%" stopColor={colors.orange} />
            <Stop offset="100%" stopColor={colors.red} />
          </LinearGradient>
        </Defs>
        <Path stroke="gray" d={path} strokeWidth={8} fill="transparent" />
        {/* Progress Circle */}
        <Path
          d={path}
          stroke="url(#gradient)"
          strokeWidth={8}
          strokeDasharray={[totalCircleLength]}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
        />
        {/* Time */}
      </Svg>
    </View>
  );
};

export default RatioGauge;
