import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { phoneColor } from "./data";
import NoABG from "./NoABG";
import BG, { SIZE } from "./BG";
const { width, height } = Dimensions.get("screen");

export default function MaskedExample() {
  const [stack, setStack] = useState([phoneColor[0]]);
  const color = stack[stack.length - 1];
  return (
    <View style={styles.container}>
      <View style={styles.picture}>
        <NoABG color={stack[0]} />
        <BG color={stack[1]} />
      </View>
      <View style={styles.buttons}>
        {phoneColor.map((c, index) => {
          return (
            <RectButton
              onPress={() => {
                setStack([color, c]);
              }}
              key={index}
            >
              <View
                style={{
                  width: width / 3,
                  height: width / 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: c,
                    width: 20,
                    height: 20,
                    borderRadius: 20 / 2,
                  }}
                ></View>
              </View>
            </RectButton>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  picture: {
    overflow: "hidden",
    height: SIZE * 2,
  },
  container: {
    flex: 1,
  },
});
