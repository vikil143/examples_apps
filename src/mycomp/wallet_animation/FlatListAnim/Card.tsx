import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react';
import { SCREEN_HEIGHT } from '../../../constants';

const MARGIN = 10;
export const CARD_HEIGHT = SCREEN_HEIGHT / 4
export const CARD_HEIGHT_MARGIN = CARD_HEIGHT + MARGIN;

interface CardProp {
    y: Animated.Value;
    index: number;
}

export default function Card({ y, index }: CardProp) {

    const translateY = Animated.add(y, y.interpolate({
        inputRange: [0, index * CARD_HEIGHT_MARGIN],
        outputRange: [0, -index * CARD_HEIGHT_MARGIN],
    }))
    const positionY = Animated.subtract(y, Animated.multiply(CARD_HEIGHT_MARGIN, index))

    const isTop = 0;
    const isDisapperring = -CARD_HEIGHT_MARGIN;
    const isAppearring = SCREEN_HEIGHT;
    const isBottom = SCREEN_HEIGHT - CARD_HEIGHT_MARGIN;

    const scale = positionY.interpolate({
        inputRange: [isDisapperring, isTop, isBottom, isAppearring],
        outputRange: [0.5, 1, 1, 0.5]
    });

    const opacity = positionY.interpolate({
        inputRange: [isDisapperring, isTop, isBottom, isAppearring],
        outputRange: [0, 1, 1, 0]
    });



    return (
        <Animated.View style={[styles.container,
        {
            opacity,
            backgroundColor: (index + 1) % 2 ? "blue" : "red",
            transform: [{ translateY: translateY }, { scale }]
        }]}>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: CARD_HEIGHT,
        marginBottom: MARGIN,
        borderRadius: 10
    }
})