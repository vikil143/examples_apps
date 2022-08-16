import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  useSharedValue,
  useDerivedValue,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { between, useVector } from "react-native-redash";

import {
  // calculateLayout,
  // lastOrder,
  Offset,
  // reorder
} from "./Layout";
import Placeholder, { MARGIN_TOP, MARGIN_LEFT } from "./components/Placeholder";

interface SortableWordProps {
  offsets: Offset[];
  children: ReactElement<{ id: number }>;
  index: number;
  containerWidth: number;
}

const SortableWord = ({
  offsets,
  index,
  children,
  containerWidth,
}: SortableWordProps) => {
  const offset = offsets[index];
  const isInBank = useDerivedValue(() => {
    return offset.order.value === -1;
  });
  const translateX = useDerivedValue(() => {
    if (isInBank.value) {
      return offset.originalX.value - MARGIN_LEFT;
    }
    return offset.x.value;
  });

  const translateY = useDerivedValue(() => {
    if (isInBank.value) {
      return offset.originalY.value + MARGIN_TOP;
    }
    return offset.y.value;
  });

  const style = useAnimatedStyle(() => {
    // console.log("### render ", offset);
    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: offset.width.value,
      height: offset.height.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      // right: 0,
      // bottom: 0,
    };
  });
  return (
    <>
      <Placeholder offset={offset} />
      <Animated.View style={style}>
        <Animated.View style={StyleSheet.absoluteFill}>
          {children}
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default SortableWord;
