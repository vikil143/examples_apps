import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { rNo } from '../../animation_helpers/animation'

interface GestureProps {
    translateY: Animated.SharedValue<number>
}


export default function GestureHandler({ translateY }: GestureProps) {

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { y: number }>({
        onStart: (_, ctx) => {
            ctx.y = translateY.value;
        },
        onActive: ({ translationX }, ctx) => {
            translateY.value = translationX + ctx.y
        }
    })

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[StyleSheet.absoluteFillObject]}></Animated.View>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({})