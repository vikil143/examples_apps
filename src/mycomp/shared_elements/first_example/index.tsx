import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Animated,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { SCREEN_HEIGHT } from "../../../constants";
import Padding from "../../Padding";
import { images } from "../data";

interface Props {}

interface State {
  activeImage: string | null;
  index: number;
}

export default class FirstExample extends React.Component<Props, State> {
  size: Animated.ValueXY;
  position: Animated.ValueXY;
  animation: Animated.Value;
  _x: number;
  _y: number;
  _width: number;
  _height: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      activeImage: null,
      index: -1,
    };
    this.size = new Animated.ValueXY();
    this.position = new Animated.ValueXY();
    this.animation = new Animated.Value(0);
    this._x = 0;
    this._y = 0;
    this._width = 0;
    this._height = 0;
  }

  _girdImages: Record<string, Image | null> = {};

  openImage = (index: number) => {
    this._girdImages[index]?.measure((x, y, width, height, pageX, pageY) => {
      this._x = x;
      this._y = y;
      this._width = width;
      this._height = height;

      this.size.setValue({ x: width, y: height });
      this.position.setValue({ x: pageX, y: pageY });
      this.animation.setValue(1);

      this.setState({ activeImage: images[index], index });
    });
  };

  render() {
    const contentStyle: ViewStyle = {
      transform: [{ translateY: SCREEN_HEIGHT }],
    };

    const activeShadedStyle = {
      opacity: this.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
    };

    const activeImageStyle = {
      width: this.size.x,
      height: this.size.y,
      top: this.size.y,
      left: this.size.x,
    };

    return (
      <View style={[styles.container]}>
        <ScrollView style={[styles.container]}>
          <View style={[styles.grid]}>
            {images.map((item, key) => {
              const style = this.state.index === key ? activeShadedStyle : null;
              return (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={this.openImage.bind(this, key)}
                >
                  <Animated.Image
                    ref={(image: Image) => (this._girdImages[key] = image)}
                    source={{
                      uri: item,
                    }}
                    style={[styles.gridItem, style]}
                  />
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
        <View
          style={[StyleSheet.absoluteFillObject]}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >
          <View style={[styles.topContainer]}>
            {/* {!!this.state.activeImage && ( */}
            <Animated.Image
              style={[styles.activeImage, activeImageStyle]}
              source={{ uri: this.state.activeImage! }}
            />
            {/* )} */}
          </View>
          <View style={[styles.content, contentStyle]}>
            <Padding all={5}>
              <Text style={[styles.title]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </Padding>
            <Padding all={5}>
              <Text style={[{}]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </Padding>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeImage: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  content: {
    flex: 2,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "33%",
    height: 150,
  },
  container: {
    flex: 1,
  },
});
