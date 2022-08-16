import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
// import {} from ""

import Snapchat, { stories } from "./Snapchat";
import StoryComp from "./Story";
import { SnapchatRoutes } from "./Model";

export const assets = stories
  .map((story) => [story.avatar, story.source])
  .flat();

const Stack = createSharedElementStackNavigator();
const Navigator = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      cardOverlayEnabled: true,
      cardStyle: { backgroundColor: "transparent" },
    }}
    mode="modal"
  >
    <Stack.Screen
      name="Snapchat"
      component={Snapchat}
      sharedElementsConfig={(route) => {
        return [route.params.story.id];
      }}
    />
    <Stack.Screen name="Story" component={StoryComp} />
  </Stack.Navigator>
);

export default Navigator;
