import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Circle,
} from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { withTiming } from "react-native-reanimated";

import StaticTabbar, { SIZE } from "./StaticTabbar";
import Row from "./Row";

const R = SIZE / 4;
const COLOR = "#02CBD6";
const END_COLOR = "#00B4D4";
const WIDTH = 3.14 * SIZE;
const HEIGHT = 3.5 * SIZE;

// const d = [`M 0 0`, `H ${WIDTH}`, "V 100", "Z"].join(" ");

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    width: SIZE,
    height: SIZE,
    borderRadius: R,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: (Dimensions.get("window").width - WIDTH) / 2,
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
  },
  items: {
    height: HEIGHT - SIZE,
    justifyContent: "space-evenly",
  },
});

interface TabbarProps {
  open: Animated.SharedValue<number>;
}

const Tabbar = ({ open }: TabbarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          open.value = withTiming(open.value === 1 ? 0 : 1);
        }}
      >
        <View>
          <StaticTabbar />
          <View
            style={[styles.overlay, { paddingBottom: insets.bottom }]}
            pointerEvents="none"
          >
            <Svg width={WIDTH} height={HEIGHT} style={{ zIndex: 1 }}>
              <Defs>
                <LinearGradient
                  id="gradient"
                  x1={WIDTH / 2}
                  y1={0}
                  x2={WIDTH / 2}
                  y2={HEIGHT}
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop offset={0} stopColor={END_COLOR} />
                  <Stop offset={1} stopColor={COLOR} />
                </LinearGradient>
              </Defs>
              <Circle r={R} cx={R / 2} cy={R / 2} fill="blue" />
              {/* //fill="url(#gradient)" /> */}
              {/* <Path d={d} fill="url(#gradient)" /> */}
            </Svg>
          </View>
          <View style={[styles.overlay, { paddingBottom: insets.bottom }]}>
            <View style={styles.icon}>
              <View>
                <Icon name="x" color="white" size={32} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.content,
          {
            bottom: insets.bottom,
          },
        ]}
        pointerEvents="box-none"
      >
        <View style={styles.items}>
          <Row label="Mood check-in" icon="edit" />
          <Row label="Voice note" icon="mic" />
          <Row label="Add Photo" icon="image" />
        </View>
      </View>
    </>
  );
};

export default Tabbar;
