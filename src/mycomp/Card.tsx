import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

interface CardProps {
  onPress: () => void;
  text: string;
}

export default function Card({ text, onPress }: CardProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ padding: 20 }}>
        <Text>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
