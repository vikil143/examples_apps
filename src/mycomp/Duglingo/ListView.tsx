import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Word from "./components/Word";
import { Word as WordType } from "./Modal";

interface Props {
  words: WordType[];
}

export default function ListView({ words }: Props) {
  const offsets = words.map((_, __) => ({
    width: useSharedValue(0),
    heigth: useSharedValue(0),
    oX: useSharedValue(0),
    oY: useSharedValue(0),
    // This are changed dynamically
    order: useSharedValue(0),
    x: useSharedValue(0),
    y: useSharedValue(0),
  }));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Line />
      <View>
        <View style={styles.wordRow}>
          {words.map(({ word, id }) => {
            return (
              <View key={id} style={styles.word}>
                <View
                  style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: "#E6E5E6",
                    borderRadius: 8,
                  }}
                />
                <Word word={word} />
              </View>
            );
          })}
        </View>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  word: {
    margin: 8,
  },
  wordRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
