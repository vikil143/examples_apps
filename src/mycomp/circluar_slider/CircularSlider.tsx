import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Path } from "react-native-svg";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, } from "react-native-reanimated";
import commonStyles from '../../commonStyles';
import { SCREEN_WIDTH } from '../../constants';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const STROKE = 30
const RADIUS = (SCREEN_WIDTH - STROKE * 2) / 2;

interface CursorProps {

}


/*

    Steps follow for circular slider and trignometric to rotate slider in circle
    1. import svg and create circle with some center
    For circular rotate follow below
        1. from pangresture we get x and y values
        2. we need find to angle(0) with fixed radius(r) 
        3. 0 will find using pythograus thorem where tan0 = x/y
        therefore 0 = atan(x/y)
        4. so therefore sin0 = y'/r and cos0 = x'/r
        y' = sin0 * r and x' = cos0 * r

        convert then canvas into cartisan
        x' = translateX + r
        y' = -translateY + r

*/

function Cursor({ }: CursorProps) {
    const xOffset = useSharedValue(1);
    const yOffset = useSharedValue(1);
    const theta = useDerivedValue(() => {
        return Math.atan(yOffset.value / xOffset.value)
    }, [xOffset.value, yOffset.value])
    // const angle = useDerivedValue(() => {
    //     const x = xOffset.value + RADIUS - STROKE / 2;
    //     const y = -yOffset.value + RADIUS - STROKE / 2;
    //     return Math.atan(x / y);
    // }, [xOffset.value, yOffset.value])
    // const translateX = useDerivedValue(() => {
    //     return RADIUS * Math.cos(angle.value)
    // }, [angle.value]);
    // const translateY = useDerivedValue(() => {
    //     return RADIUS * Math.sin(angle.value)
    // }, [angle.value]);


    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number; y: number }>({
        onStart: (_, ctx) => {
            ctx.x = xOffset.value;
            ctx.y = yOffset.value;
        },
        onActive: ({ translationX, translationY, x, y }, ctx) => {
            xOffset.value = x + ctx.x;
            yOffset.value = y + ctx.y
        },
    })

    const style = useAnimatedStyle(() => {
        const translateX = Math.cos(theta.value) * (RADIUS - STROKE);
        const translateY = Math.sin(theta.value) * (RADIUS - STROKE);
        return {
            transform: [{ translateX: translateX }, { translateY: translateY }]
        }
    })

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.cursor, style]}>
            </Animated.View>
        </PanGestureHandler>
    )
}

interface SliderProps {
    radius: number
}


function Slider({ radius }: SliderProps) {

    return (
        <Svg width={radius * 2} height={radius * 2}>
            <Circle r={radius - STROKE} cx={radius} cy={radius} strokeWidth={STROKE} stroke="grey" />
        </Svg>
    )
}


export default function CircularSlider() {
    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <View style={[commonStyles.center, { backgroundColor: "red" }]}>
                <Slider radius={RADIUS} />
                <Cursor />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cursor: {
        width: STROKE,
        height: STROKE,
        borderRadius: STROKE,
        backgroundColor: "blue",
        position: "absolute"
    }
})