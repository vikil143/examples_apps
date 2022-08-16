import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabBar, { TABBAR_HEIGHT, TABBAR_WIDTH, TAB_WIDTH } from "./Tabbar";
import MaskedView from "@react-native-community/masked-view";

export default function ChromeTabbar() {
  const x = React.useRef(new Animated.Value(0)).current;
  const translateX = x.interpolate({
    inputRange: [0, TABBAR_WIDTH],
    outputRange: [TABBAR_WIDTH - TAB_WIDTH, 0],
  });
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View>
          <TabBar
            color="#f8f9fa"
            backgroundColor="#828384"
            borderColor="#505152"
          />
          <MaskedView
            style={StyleSheet.absoluteFill}
            maskElement={
              <Animated.View
                style={[styles.activeTab, { transform: [{ translateX: 0 }] }]}
              />
            }
          >
            <TabBar
              color="#3b4043"
              backgroundColor="#f8f9fa"
              borderColor="#f8f9fa"
            />
          </MaskedView>
        </View>
        {/* <MaskedViewIOS
        style={StyleSheet.absoluteFill}
        maskElement={<Animated.View style={[styles.activeTab, { transform: [{ translateX }] } ]} />}
      >
        <TabBar color="#3b4043" backgroundColor="#f8f9fa" borderColor="#f8f9fa" />
      </MaskedViewIOS> */}
        <Animated.ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={{ width: TABBAR_WIDTH * 2 }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x } } }],
            { useNativeDriver: true }
          )}
          bounces={false}
          snapToInterval={TAB_WIDTH + TAB_WIDTH / 2}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#212223",
  },
  activeTab: {
    backgroundColor: "black",
    width: TAB_WIDTH,
    height: TABBAR_HEIGHT,
    borderRadius: 5,
  },
  container: {
    width: TABBAR_WIDTH,
    height: TABBAR_HEIGHT,
  },
});
