import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  interpolate,
  runOnJS,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CircularProgress from "./CircularProgress";
import { RADIUS } from "./HalfCircle";
import NoSvgCircularProgress from "./NoSvgCircularProgress";
import SvgCircle from "./svg/SvgCircle";
import Arc from "./svg/Arc";
import CircularLoader from "./svg/CircularLoader";
import Line from "./svg/Line";

export default function CircularProgressBarScreen() {
  const progress = useSharedValue(0);
  const startAngle = useSharedValue(Math.PI);
  const endAngle = useSharedValue(Math.PI * 2);

  useEffect(() => {
    loopAnimation();
  }, []);

  const loopAnimation = () => {
    // startAngle.value = withTiming(Math.PI * 0, { duration: 6000 });
    progress.value = 0;
    progress.value = withTiming(1, { duration: 5000 }, () => {
      // runOnJS(loopAnimation)();
      // progress.value = 0;
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Line />
        {/* <Arc startAngle={startAngle} endAngle={endAngle} /> */}
        {/* <CircularLoader /> */}
        {/* <SvgCircle progress={progress} /> */}
        {/* <NoSvgCircularProgress progress={progress} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
