import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  Dimensions,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import Animated, { withTiming } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

export const EXTRAREMAINING = width * 0.3;
export const TABBARWIDTH = width * 0.7;
export const TABWIDTH = TABBARWIDTH / 3;
export const TABHEIGHT = 45;

interface Props {
  color: string;
  backgroundColor: string;
  borderColor: string;
  onFirstTabClick?: () => void;
  onSecondTabClick?: () => void;
  onThridTabClick?: () => void;
}

export default function Tabbar({
  color,
  backgroundColor,
  borderColor,
  onFirstTabClick,
  onSecondTabClick,
  onThridTabClick,
}: Props) {
  const tabStyle: ViewStyle = {
    backgroundColor,
    borderColor,
  };

  return (
    <View style={[styles.tabContainer]}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (typeof onFirstTabClick === "function") {
            onFirstTabClick();
          }
        }}
      >
        <View style={[styles.tab, styles.firstTab, tabStyle]}>
          <Icon name="eye-off" size={35} {...{ color }} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          if (typeof onSecondTabClick === "function") {
            onSecondTabClick();
          }
        }}
      >
        <View style={[styles.tab, tabStyle]}>
          <Icon name="grid" size={35} {...{ color }} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          if (typeof onThridTabClick === "function") {
            onThridTabClick();
          }
        }}
      >
        <View style={[styles.tab, styles.lastTab, tabStyle]}>
          <Icon name="chrome" size={35} {...{ color }} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  lastTab: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  firstTab: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  tab: {
    width: TABWIDTH,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 5,
    height: TABHEIGHT,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {},
});
