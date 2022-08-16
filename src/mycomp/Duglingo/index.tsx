import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ListView from "./ListView";
import { Word } from "./Modal";

const words: Word[] = [
  { id: 1, word: "Ihr" },
  { id: 8, word: "hungrig" },
  { id: 2, word: "isst" },
  { id: 7, word: "er" },
  { id: 6, word: "weil" },
  { id: 9, word: "ist" },
  { id: 5, word: "," },
  { id: 3, word: "einen" },
  { id: 4, word: "Apfel" },
];

export default function Duglingo() {
  return (
    <View style={styles.container}>
      <Header />
      <ListView words={words} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
