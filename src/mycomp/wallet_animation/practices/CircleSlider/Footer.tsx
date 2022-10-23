import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../../constants';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import commonStyles from '../../../../commonStyles';
import { clamp } from '../../../../animation_helpers/animation';

const MARGIN = 10
const R = (SCREEN_WIDTH - MARGIN * 6) / 5

const data = new Array(10).fill(0);

interface ItemProps {
    index: number;
    x: Animated.SharedValue<number>
}

const Item = ({ index, x }: ItemProps) => {
    const style = useAnimatedStyle(() => {
        const translateX = interpolate(x.value, [-SCREEN_WIDTH + R, 0],
            [-SCREEN_WIDTH + R, 0],
            Extrapolate.CLAMP);
        return {
            transform: [{ translateX }]
        }
    })
    return (
        <Animated.View style={[styles.circle, style]} >
            <Text style={{ color: "white", fontSize: 24 }}>{index}</Text>
        </Animated.View>
    )
}


export default function Footer() {
    const x = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number }>({
        onStart: (_, ctx) => {
            ctx.x = x.value;
        },
        onActive: ({ translationX }, ctx) => {
            x.value = clamp(translationX + ctx.x, (-data.length * (R + MARGIN)) + SCREEN_WIDTH, 0)
        },
        onEnd: () => { }
    })

    const style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: x.value }]
        }
    })

    return (
        <View style={[styles.footer]}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[commonStyles.rowAlignCenter,]}>
                    {data.map((item, index) => {
                        return <Item index={index} x={x} key={index} />
                    })}
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: R,
        height: R,
        borderRadius: R,
        backgroundColor: "black",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
        // position: "absolute"
    },
    footer: {
        backgroundColor: "#ddd",
        padding: 10,
        flexDirection: "row",
        height: R + MARGIN * 2,
    },
})