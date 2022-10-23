import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../commonStyles'
import Card, { CARD_HEIGHT_MARGIN } from './Card'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { clamp } from '../../animation_helpers/animation';
import { SCREEN_HEIGHT } from '../../constants'

const data = new Array(15).fill(0)

export default function WalletAnimation() {
    const y = useSharedValue(0);
    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { y: number }>({
        onStart: (_, ctx) => {
            ctx.y = y.value;
        },
        onActive: ({ translationY }, ctx) => {
            y.value = clamp(translationY + ctx.y, - data.length * CARD_HEIGHT_MARGIN + SCREEN_HEIGHT, 0)
        },
        onEnd: ({ velocityY }) => {
            // y.value = withSpring(clamp(y.value - 20, - data.length * CARD_HEIGHT_MARGIN + SCREEN_HEIGHT, 0), { velocity: velocityY })
        }
    })

    const style = useAnimatedStyle(() => {
        return {
            // transform: [{ translateY: y.value }]
        }
    })

    return (
        <View style={[commonStyles.flexOne, styles.container]}>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[]}>
                    {data.map((_, ind) => {
                        return <Card y={y} key={ind} index={ind} />
                    })}
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
})