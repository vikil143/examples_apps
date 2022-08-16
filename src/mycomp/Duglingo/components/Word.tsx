import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface WordProps {
  word: string;
}

export default function Word({ word }: WordProps) {
  return (
    <View>
      <View style={styles.container}>
        <Text>{word}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E6E5E6",
    zIndex: -1,
  },
  container: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
