import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg from "react-native-svg";
import { mountTiming } from "../../animation_helpers/hooks";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import ACircle from "./ACircle";
import ALine from "./ALine";

export default function SplashScreen() {
  const progress = mountTiming(5000);

  return (
    <View style={[styles.container]}>
      <View
        style={{
          height: SCREEN_WIDTH,
          width: SCREEN_WIDTH,
        }}
      >
        <ACircle
          inputRange={[0.2, 0.5]}
          outputRange={[0, 1]}
          progress={progress}
          size={50}
          theta={Math.PI / 3}
          radius={150}
          backgroundColor="blue"
        />
        <ACircle
          inputRange={[0.4, 0.7]}
          outputRange={[0, 1]}
          progress={progress}
          size={60}
          theta={Math.PI / 1.75}
          radius={180}
        />
        <ACircle
          inputRange={[0.1, 0.4]}
          outputRange={[0, 1]}
          progress={progress}
          size={40}
          theta={Math.PI / 1.2}
          radius={200}
        />
        <ACircle
          inputRange={[0, 1]}
          outputRange={[1, 1]}
          progress={progress}
          //   position={{ x: SCREEN_WIDTH / 2, y: SCREEN_WIDTH / 2 }}
          size={100}
          yOffset={-100 / 2}
          backgroundColor="green"
        />
        <ACircle
          inputRange={[0.4, 0.6]}
          outputRange={[0, 1]}
          progress={progress}
          //   position={{ x: SCREEN_WIDTH / 2, y: SCREEN_WIDTH / 2 }}
          size={5}
          backgroundColor="red"
        />
        <ACircle
          inputRange={[0.7, 0.9]}
          outputRange={[0, 1]}
          progress={progress}
          size={60}
          theta={Math.PI * 1.15}
          radius={160}
        />
        <ACircle
          inputRange={[0.5, 0.9]}
          outputRange={[0, 1]}
          progress={progress}
          size={50}
          theta={Math.PI * 1.45}
          radius={110}
        />
        <ACircle
          inputRange={[0.3, 0.5]}
          outputRange={[0, 1]}
          progress={progress}
          size={60}
          theta={Math.PI * 1.8}
          radius={100}
        />
      </View>
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
