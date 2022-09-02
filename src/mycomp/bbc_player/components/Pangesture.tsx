import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, useDerivedValue, } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

interface PangestureProps {
    index: Animated.SharedValue<number>;
    ratio: number;
    length: number
}

export default function Pangesture({ index, ratio }: PangestureProps) {
    const translateX: Animated.SharedValue<number> = useSharedValue(0);
    const increament = useDerivedValue(() => {
        return translateX.value / ratio
    }, [])

    const setIndex = (value: Animated.SharedValue<number>) => {
        "worklet"
        return value.value - increament.value
    }

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number; y: number }>({
        onStart: (_, ctx) => {
            ctx.x = translateX.value
        },
        onActive: ({ translationX }, ctx) => {
            translateX.value = translationX + ctx.x;
            index.value = setIndex(translateX)
        }
    });

    const style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        }
    })
    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={{ ...StyleSheet.absoluteFillObject }}>
            </Animated.View>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({})