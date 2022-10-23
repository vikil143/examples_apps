import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, interpolateColor, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from "react-native-gesture-handler"
// import { clamp, polar2Cartesian } from '../../animatedHelper';
import { clamp, } from '../../animation_helpers/animation';
// import { canvas2Polar, polar2Cartesian } from "../../coordinates";
import { canvas2Polar, polar2Canvas } from "react-native-redash"


const SCROLL_MARGIN = 20;
const IPOD_MARGIN = 20;
const SCREEN_WIDTH =
    Dimensions.get('window').width - IPOD_MARGIN * 2 - SCROLL_MARGIN * 2;
const BIG_BALL_SIZE = 200;
const SMALL_BALL_SIZE = 50;
const INNER_BALL_SIZE = BIG_BALL_SIZE - SMALL_BALL_SIZE * 2;
const TRANSLATE_VALUE = 150;
// Problem break down

/* 
    UnderStand Problem
    Ball pan till certain position DRAG_LENGTH when release back to prev position
    onActive ball Visible onEnd hide ball
    Inputs 
        isVisible
        dragX
        dragY
    Ouputs
        UX above
*/

/*
    Make varibles
    isVisible, dragX and dragY 
    
    // onActive
        Drag to certain limit in circluar wave
    // OnEnd 
    end gesture back 0

*/

interface BallProps {
    translateTillY: number;
    translateTillX: number;
    colorHexCode?: string
}

export default function Ball({ translateTillY, translateTillX, colorHexCode = "#000" }: BallProps) {
    const dragX = useSharedValue(0);
    const dragY = useSharedValue(0);
    const xOffset = useSharedValue(0);
    const yOffset = useSharedValue(0);
    // const angle = useDerivedValue(() => {
    //     return Math.atan(yOffset.value / xOffset.value);
    // }, []);
    const angle = useSharedValue(0);
    // const isVisible = useDerivedValue(() => {
    //     return !!dragX.value && !!dragY.value ? 1 : 0.3
    // }, [dragX.value, dragY.value]);

    const isVisible = useSharedValue(0.3)



    const onGestureEvent = useAnimatedGestureHandler({
        onStart: () => {
            isVisible.value = 1
        },
        onActive: ({ translationX, translationY, x, y }, ctx) => {
            const { radius, theta } = canvas2Polar({ x: translationX, y: translationY }, { x: 0, y: 0 })
            const R = radius;
            const { x: X, y: Y } = polar2Canvas({ radius: clamp(R, 0, TRANSLATE_VALUE), theta }, { x: 0, y: 0 })
            dragX.value = X;
            dragY.value = Y;

        },
        onEnd: ({ velocityX, velocityY }) => {
            dragX.value = withTiming(0);
            dragY.value = withTiming(0)
            // isVisible.value = withSpring(0.5, { velocity: velocityX > velocityY ? velocityX : velocityY });
            // isVisible.value = 0.3
            // xOffset.value = withSpring(0, {
            //     velocity: velocityX,
            //     //  overshootClamping: true,
            //     // restSpeedThreshold: 100, restDisplacementThreshold: 100
            // });
            // yOffset.value = withSpring(0, { velocity: velocityY })
        }
    })

    const ballStyles = useAnimatedStyle(() => {
        // const backgroundColor = interpolateColor(isVisible.value, [0.3, 1], ["#d3d3d3", colorHexCode]);
        // const backgroundColor = isVisible.value === 0.3 ? "#d3d3d3" : colorHexCode;
        return {
            transform: [{ translateX: dragX.value }, { translateY: dragY.value }],
            // backgroundColor: backgroundColor
        }
    })

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.ball, { zIndex: 1 }, ballStyles]} />
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    ball: {
        width: INNER_BALL_SIZE * 0.7,
        height: INNER_BALL_SIZE * 0.7,
        borderRadius: BIG_BALL_SIZE,
        // top: INNER_BALL_SIZE * 0.15,
        // left: INNER_BALL_SIZE * 0.15,
        backgroundColor: "red",
        position: "absolute"
    },


})