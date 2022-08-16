import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SCREEN_WIDTH } from "../../constants";
import Spacing from "../Spacing";
import CircularPlacedItems from "./CircularPlacedItems";

function Post() {
  return (
    <View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />
      <View style={{ paddingVertical: 10, marginVertical: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>John Doe </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Image
          style={{ height: 280, width: "100%" }}
          resizeMode="contain"
          source={require("../../assets/image_two.jpg")}
        />
      </View>
      <View
        style={{ height: 1, width: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}
      />
    </View>
  );
}

export default function Body() {
  return (
    <View>
      <Post />
      <Spacing size={5} />
      <Post />
      <Spacing size={5} />
      <Post />
      <Spacing size={5} />
      <Post />
      <Spacing size={5} />
      <Post />
      <CircularPlacedItems radius={(SCREEN_WIDTH - 90) / 2} />
    </View>
  );
}

const styles = StyleSheet.create({});
