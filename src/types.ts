type NavigatonName =
  | "AllScreens"
  | "MonzoCard"
  | "JoeAndJuice"
  | "SnapChat"
  | "ClearTodo"
  | "CircularProgress"
  | "MaskedExample"
  | "ChromeTab"
  | "CustomDrawer"
  | "TapLongPress"
  | "AppleWatch"
  | "MyLiquidSwipe"
  | "Reflectly"
  | "CalenderWP"
  | "RotateAnimation"
  | "YoutubeTransition"
  | "ThreeDCarousal"
  | "AnimatedTabbar"
  | "Carousal"
  | "Scale3D"
  | "BarChart"
  | "CircularDot"
  | "ThreeTransformation"
  | "ScrollHeader"
  | "CircularGesture"
  | "SharedElement1E"
  | "Tabbar"
  | "SplashScreen"
  | "BottomTabs"
  | "StoryCircle"
  | "BrainTest"
  | "ProfileCutter"
  | "Darkroom"
  | "Drawer"
  | "SkiaExperiment"
  | "DoubleScroller";

type StackTypes = {
  AllScreens: undefined;
  MonzoCard: undefined;
  JoeAndJuice: undefined;
  SnapChat: undefined;
  ClearTodo: undefined;
  CircularProgress: undefined;
  MaskedExample: undefined;
  ChromeTab: undefined;
  CustomDrawer: undefined;
  TapLongPress: undefined;
  AppleWatch: undefined;
  MyLiquidSwipe: undefined;
  Reflectly: undefined;
  CalenderWP: undefined;
  RotateAnimation: undefined;
  YoutubeTransition: undefined;
  ThreeDCarousal: undefined;
  AnimatedTabbar: undefined;
  Carousal: undefined;
  Scale3D: undefined;
  BarChart: undefined;
  // ContainerCaursal: undefined;
  CircularDot: undefined;
  ThreeTransformation: undefined;
  ScrollHeader: undefined;
  CircularGesture: undefined;
  // Shared element
  SharedElement1E: undefined;
  Tabbar: undefined;
  SplashScreen: undefined;
  BottomTabs: undefined;
  StoryCircle: undefined;
  BrainTest: undefined;
  ProfileCutter: undefined;
  Darkroom: undefined;
  Drawer: undefined;
  SkiaExperiment: undefined;
  DoubleScroller: undefined;
};

interface Modal {
  id: number;
  text: string;
  route: NavigatonName;
}

export { StackTypes, Modal, NavigatonName };