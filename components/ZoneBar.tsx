import { View, Text, Dimensions } from "react-native";
import React from "react";
import { StackedBarChart } from "react-native-chart-kit";
import { userData } from "../constants/userData";
import { colors } from "../theme/Colors";

const ZoneBar = () => {
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = screenWidth - 16;
  
  const data = {
    labels: ["Ratio", "Current Ratio"],
    legend: ["Under Training", "Optimal", "Over Reaching", "Over Training"],
    data: [[0.8, 1.3, 1.5, 2.0],[userData[1].ratio.toFixed(2)]],
    barColors: ["green", "blue", "yellow", "red"],
  };
  const chartConfig = {
    backgroundGradientFrom: colors.black,
    backgroundGradientTo: colors.lightBlack,
    color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 0.5) => colors.lightBlue,
    strokeWidth: 2,
  };
  return (
    <View>
      <StackedBarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        hideLegend={false}
        withHorizontalLabels={false}
      />
    </View>
  );
};

export default ZoneBar;
