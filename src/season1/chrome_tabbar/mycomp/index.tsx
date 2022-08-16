import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import Tabbar, { EXTRAREMAINING, TABHEIGHT, TABWIDTH } from "./Tabbar";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function MyChormeTabs() {
  const tabPosition = useSharedValue(EXTRAREMAINING / 2);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPosition.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }} />
      <View>
        <Tabbar
          color="#f8f9fa"
          backgroundColor="#828384"
          borderColor="#505152"
          //   onFirstTabClick={() =>
          //     (tabPosition.value = withSpring(EXTRAREMAINING / 2))
          //   }
          //   onSecondTabClick={() =>
          //     (tabPosition.value = withSpring(EXTRAREMAINING / 2 + TABWIDTH))
          //   }
          //   onThridTabClick={() =>
          //     (tabPosition.value = withSpring(EXTRAREMAINING / 2 + TABWIDTH * 2))
          //   }
        />

        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={<Animated.View style={[styles.activeTab, style]} />}
        >
          <Tabbar
            color="#3b4043"
            backgroundColor="#f8f9fa"
            borderColor="#f8f9fa"
            onFirstTabClick={() =>
              (tabPosition.value = withSpring(EXTRAREMAINING / 2))
            }
            onSecondTabClick={() =>
              (tabPosition.value = withSpring(EXTRAREMAINING / 2 + TABWIDTH))
            }
            onThridTabClick={() =>
              (tabPosition.value = withSpring(
                EXTRAREMAINING / 2 + TABWIDTH * 2
              ))
            }
          />
        </MaskedView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    width: TABWIDTH,
    backgroundColor: "black",
    height: TABHEIGHT,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#212223",
  },
});
