import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useSharedValue } from 'react-native-reanimated';
import { SCREEN_WIDTH } from '../../../constants';
import { snapPoint } from '../../../animation_helpers/animation';

interface PanProps {
    index: Animated.SharedValue<number>;
    ratio: number;
    length: number
}

export default function PangestureOfThubnail({ index }: PanProps) {
    const translateX = useSharedValue(0);

    const setIndex = () => {
        "worklet";
        return
    }

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number }>({
        onStart: (_, ctx) => {
            ctx.x = translateX.value
        },
        onActive: ({ translationX }, ctx) => {
            translateX.value = translationX + ctx.x;
        },
        onEnd: ({ velocityX }) => {
            const to = snapPoint(translateX.value, velocityX,
                [Math.round(translateX.value / SCREEN_WIDTH) - 1,
                Math.round(translateX.value / SCREEN_WIDTH),
                Math.round(translateX.value / SCREEN_WIDTH) + 1])

            index.value = to

        }
    })


    return (
        <PanGestureHandler onGestureEvent={onGestureEvent} activeOffsetX={[-10, 10]}>
            <Animated.View style={[StyleSheet.absoluteFillObject,]}>
            </Animated.View>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({})