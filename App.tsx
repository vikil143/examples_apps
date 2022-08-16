import "react-native-gesture-handler";
import "webgltexture-loader-expo-camera";

// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// const IMEI = require("react-native-imei");

import { SafeAreaProvider } from "react-native-safe-area-context";

// season 1
import ChromeTabbar from "./src/season1/chrome_tabbar";
import MyChromeTabbar from "./src/season1/chrome_tabbar/mycomp";

// season 2
import ClearTodo from "./src/season2/clear-boilerplate/App";
import SpotifyHeader from "./src/season2/spotify_header/App";
import MonzoCard from "./src/season2/monzo-card-selection-boilerplate/App";

// season 3
import UberEatsSwipe from "./src/season3/UberEatsSwipe";

// season 4
import Duolingo from "./src/season4/duolingo/Duolingo";
import PhilzCoffee from "./src/season4/PhilzCoffee";
import { Reflectly } from "./src/season4/Reflectly";
// import Snapchat from "./src/season4/Snapchat";

// my comp
import ArrowLoader from "./src/mycomp/loading/arrowrotate/ArrowLoader";
import CircularProgress from "./src/mycomp/CircularProgressBar";
import MaskedExample from "./src/mycomp/MaskedExample";
import CustomDrawer from "./src/mycomp/CustomDrawer";
import TapLongPress from "./src/mycomp/TapLongPress";
import MyLiquidSwipe from "./src/mycomp/MyLiquidSwipe";
import DoubleScroller from "./src/mycomp/DoubleScroller";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Duglingo from "./src/mycomp/Duglingo";
import JoeAndJuice from "./src/mycomp/joe_and_juice";
import AllScreens from "./src/AllScreens";
import AppleWatch from "./src/mycomp/AppleWatch";
import { StackTypes } from "./src/types";
import CalendraWP from "./src/mycomp/without_planned/CalenderWP";
import RotateAnimation from "./src/mycomp/RotateAnimation";
import YoutubeTransition from "./src/season1/youtube_transition";
import ThreeDCaurosal from "./src/mycomp/3DCaursal";
import AnimatedTabbar from "./src/mycomp/AnimatedTabbar";
import Caursol from "./src/mycomp/Caursols";
import ScaleD3 from "./src/mycomp/d3_work/scale";
import BarChart from "./src/mycomp/d3_work/barChart";
import CircularDot from "./src/mycomp/CircularDot";
import ThreeTransformation from "./src/mycomp/3DTransformation";
import ScrollHeader from "./src/mycomp/scroll_header";
import CircularGesture from "./src/mycomp/CircularGesture";
import Tabbar from "./src/mycomp/Tabbar";
import StoryCircle from "./src/mycomp/story_circle";
import Drawer from "./src/mycomp/Drawer";
// TSOW
import SplashScreen from "./src/jamnadas/splash-screen";
import BottomTabs from "./src/jamnadas/bottom-tabs/BottomTabTwo";

// Shared Elemnts
import FirstExample from "./src/mycomp/shared_elements/first_example";
import BrainTest from "./src/mycomp/braintest";
import ProfileCutter from "./src/mycomp/profile_cutter";
import Darkroom from "./src/season4/darkroom/Darkroom";

const Stack = createStackNavigator<StackTypes>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // React.useEffect(() => {
  //   IMEI.getImei().then((imeiList) => {
  //     console.log(imeiList);
  //   });
  // }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="AllScreens" component={AllScreens} />
            <Stack.Screen name="MonzoCard" component={MonzoCard} />
            <Stack.Screen name="JoeAndJuice" component={JoeAndJuice} />
            <Stack.Screen name="ClearTodo" component={ClearTodo} />
            <Stack.Screen
              name="CircularProgress"
              component={CircularProgress}
            />
            <Stack.Screen name="MaskedExample" component={MaskedExample} />
            <Stack.Screen name="ChromeTab" component={MyChromeTabbar} />
            <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
            <Stack.Screen name="TapLongPress" component={TapLongPress} />
            <Stack.Screen name="AppleWatch" component={AppleWatch} />
            <Stack.Screen name="MyLiquidSwipe" component={MyLiquidSwipe} />
            <Stack.Screen name="Reflectly" component={Reflectly} />
            <Stack.Screen name="CalenderWP" component={CalendraWP} />
            <Stack.Screen name="RotateAnimation" component={RotateAnimation} />
            <Stack.Screen
              name="YoutubeTransition"
              component={YoutubeTransition}
            />
            <Stack.Screen name="Darkroom" component={Darkroom} />
            <Stack.Screen name="ThreeDCarousal" component={ThreeDCaurosal} />
            <Stack.Screen name="AnimatedTabbar" component={AnimatedTabbar} />
            <Stack.Screen name="Carousal" component={Caursol} />
            <Stack.Screen name="Scale3D" component={ScaleD3} />
            <Stack.Screen name="BarChart" component={BarChart} />
            <Stack.Screen name="CircularDot" component={CircularDot} />
            <Stack.Screen
              name="ThreeTransformation"
              component={ThreeTransformation}
            />

            <Stack.Screen name="ScrollHeader" component={ScrollHeader} />
            <Stack.Screen name="CircularGesture" component={CircularGesture} />
            {/* Shared Elements */}
            <Stack.Screen name="SharedElement1E" component={FirstExample} />
            <Stack.Screen name="Tabbar" component={Tabbar} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="StoryCircle" component={StoryCircle} />
            <Stack.Screen name="BrainTest" component={BrainTest} />
            <Stack.Screen name="ProfileCutter" component={ProfileCutter} />
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="DoubleScroller" component={DoubleScroller} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
