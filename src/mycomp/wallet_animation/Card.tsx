import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';
import { SCREEN_HEIGHT } from '../../constants';

const MARGIN = 10;
export const CARD_HEIGHT = SCREEN_HEIGHT / 4
export const CARD_HEIGHT_MARGIN = CARD_HEIGHT + MARGIN;

interface CardProp {
    y: Animated.SharedValue<number>;
    index: number;
}

export default function Card({ y, index }: CardProp) {
    const translateY = useDerivedValue(() => {
        return interpolate(y.value, [-CARD_HEIGHT_MARGIN * index, 0], [-CARD_HEIGHT_MARGIN * index, 0], Extrapolate.CLAMP)
    })

    const positionY = useDerivedValue(() => {
        return y.value + index * CARD_HEIGHT_MARGIN
    })

    const style = useAnimatedStyle(() => {

        const isTop = 0;
        const isDisapperring = -CARD_HEIGHT_MARGIN;
        const isBottom = (SCREEN_HEIGHT / CARD_HEIGHT_MARGIN - 1) * CARD_HEIGHT_MARGIN
        const isAppearring = (SCREEN_HEIGHT / CARD_HEIGHT_MARGIN) * CARD_HEIGHT_MARGIN
        const scale = interpolate(positionY.value, [isDisapperring, isTop, isBottom, isAppearring], [0.5, 1, 1, 0.5], Extrapolate.CLAMP)

        const opacity = interpolate(positionY.value, [isDisapperring, isTop, isBottom, isAppearring], [0, 1, 1, 0], Extrapolate.CLAMP)

        return {
            opacity,
            transform: [{ translateY: translateY.value }, { scale }]
            // transform: [{ translateY: y.value }]
        }
    })
    return (
        <Animated.View style={[styles.container, style, { backgroundColor: (index + 1) % 2 ? "red" : "blue" }]}>
            <Text>{index}</Text>
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