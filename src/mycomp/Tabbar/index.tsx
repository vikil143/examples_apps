import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Body from "./Body";
import CircularTabbar from "./CircularTabbar";

export default function Tabbar() {
  return (
    <View style={styles.container}>
      <View style={[styles.body]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Body />
        </ScrollView>
      </View>
      <CircularTabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
