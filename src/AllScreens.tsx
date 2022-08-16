import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Card from "./mycomp/Card";
import Line from "./mycomp/Line";
import {
  data,
  dataWP,
  dataSimpleAnimation,
  dataSharedElement,
  dataJamnadas,
} from "./data";
import { StackTypes } from "./types";

type NavigationProps = StackNavigationProp<StackTypes, "AllScreens">;

interface Props {
  navigation: NavigationProps;
}

export default function AllScreens({ navigation }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(_, ind) => ind.toString()}
          renderItem={({ item: { id, text, route } }) => {
            return (
              <Card
                key={id}
                text={text}
                onPress={() => navigation.navigate(route)}
              />
            );
          }}
          ItemSeparatorComponent={() => <Line />}
          ListFooterComponent={() => <Line />}
          ListHeaderComponent={() => <Line />}
        />
        {/* <Text>AllScreens</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
