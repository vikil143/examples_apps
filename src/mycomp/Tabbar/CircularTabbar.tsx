import React, { ReactChild } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Center from "../Center";
import Animated from "react-native-reanimated";

interface IconsProps {
  children: ReactChild;
}

const Icon = ({ children }: IconsProps) => {
  return <View style={[styles.icon]}>{children}</View>;
};

export default function CircularTabbar() {
  return (
    <View
      style={{ padding: 20, backgroundColor: "white", flexDirection: "row" }}
    >
      <Icon>
        <Center>
          <Text>I</Text>
        </Center>
      </Icon>
      <Icon>
        <Center>
          <Text>C</Text>
        </Center>
      </Icon>
      <View style={{ width: 80 * 1.3, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#3498db",
            top: -25,
            width: 54,
            height: 54,
            position: "absolute",
          }}
        >
          <Center style={[{ flex: 1 }]}>
            <Animated.View style={{ transform: [{ rotate: "135deg" }] }}>
              <MaterialIcons name="add" size={40} color="#fff" />
            </Animated.View>
          </Center>
        </TouchableOpacity>
      </View>
      <Icon>
        <Center>
          <Text>O</Text>
        </Center>
      </Icon>
      <Icon>
        <Center>
          <Text>N</Text>
        </Center>
      </Icon>
    </View>
  );
}

// width: 0,
// border-top: 30px solid #6C6,
// border-left: 52px solid transparent,
// border-right: 52px solid transparent,

const styles = StyleSheet.create({
  hexgon: {},
  icon: {
    flex: 1,
  },
});
