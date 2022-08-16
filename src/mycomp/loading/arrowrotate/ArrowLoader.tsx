import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  runOnUI,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Loader from "./Loader";

export default function ArrowLoader() {
  const progress = useSharedValue(0);

  useEffect(() => {
    runOnUI(runAnimation)();
  }, []);

  const runAnimation = () => {
    "worklet";
    progress.value = withRepeat(
      withDelay(0, withTiming(1, { duration: 2000 })),
      -1
    );

    //   , () => {
    //   progress.value = 0;
    //   // runOnUI(runAnimation)();
    // });
  };

  return (
    <View style={styles.container}>
      <Loader size={40} {...{ progress }}></Loader>
      {/* //progress={progress} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
