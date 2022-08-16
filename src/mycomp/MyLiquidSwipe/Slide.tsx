import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const { height, width } = Dimensions.get("window");

interface Props {
  color: string;
  wave?: boolean;
}

const CURVE_SIZE = 60;

export default function Slide({ color, wave }: Props) {
  if (wave) {
    return (
      <View style={[StyleSheet.absoluteFillObject]}>
        <PanGestureHandler>
          <Animated.View>
            <Svg width={width} height={height}>
              <Path
                fill={color}
                // fill="pink"
                d={`M${width - 20} 0 H ${width} V ${height} H${width - 20} V${
                  (height - CURVE_SIZE) / 2
                } A 0 0 0 0 0 ${width - 30} ${
                  (height - CURVE_SIZE - 30) / 2
                } A 1 1 0 0 1 ${width - 30} ${
                  (height - CURVE_SIZE - 150) / 2
                } A 1 1 0 0 0 ${width - 20} ${
                  (height - CURVE_SIZE - 200) / 2
                }  Z`}
              />
            </Svg>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  }

  return (
    <View
      style={[StyleSheet.absoluteFillObject, { backgroundColor: color }]}
    ></View>
  );
}

const styles = StyleSheet.create({});
