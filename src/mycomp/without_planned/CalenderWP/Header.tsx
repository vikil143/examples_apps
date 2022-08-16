import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Line from "../../Line";
import Spacing from "../../Spacing";
import { SIZE } from "./constants";

interface Props {
  sWeekName: string[];
}

export default function Header({ sWeekName }: Props) {
  return (
    <View>
      <Spacing size={5} />
      <View>
        <Text style={styles.date}>2021 Sep</Text>
      </View>
      <Spacing size={5} />
      {/* Weeks */}
      <View style={styles.weekContainer}>
        {sWeekName.map((item, i) => {
          return (
            <View style={styles.week} key={i}>
              <Text style={styles.weekText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <Spacing size={5} />
      {/* <Line /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  week: {
    width: SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  weekText: {
    fontSize: 12,
    color: "#333",
  },
  weekContainer: {
    flexDirection: "row",
  },
  date: {
    fontSize: 18,
  },
});
