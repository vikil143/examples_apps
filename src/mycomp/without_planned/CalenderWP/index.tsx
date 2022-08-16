import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { WEEKS, MONTHS, PADDING, DATES } from "./constants";

export default function CalendraWP() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const prevMonth = currentMonth - 1;
  const nextMonth = currentMonth + 1;

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  console.log("### Calender WP", prevMonth, nextMonth);
  return (
    <View style={styles.container}>
      <Header sWeekName={WEEKS} />
      <MainContainer dates={DATES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
  },
});
