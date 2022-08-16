import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "./Modal";

function MainScreen() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <View style={{}}>
          <Text>Open</Text>
        </View>
      </TouchableOpacity>
      <Modal show={show} hide={() => setShow(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
});

export default MainScreen;
