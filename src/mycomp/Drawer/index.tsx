import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Drawer from "./Drawer";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";

export default function RootView() {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container]}>
      <Drawer
        open={open}
        hide={() => setOpen(false)}
        slideType="VERITCAL"
        containerStyles={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{}}>
        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
          <View style={{}}>
            <Text>open</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
