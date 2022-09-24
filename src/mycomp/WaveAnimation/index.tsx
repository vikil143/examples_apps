import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Svg, { Circle, Path, G } from "react-native-svg";
import Animated, { color, useAnimatedProps, useDerivedValue } from 'react-native-reanimated';
import commonStyles from '../../commonStyles';
import { mountTiming } from '../../animation_helpers/hooks';
import { mix } from '../../animation_helpers/animation';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RADIUS = 100

/*
    Wave Animation desc:
    make it svg 
    make curve comp to reuse
    use path for d for this making shap 
    animated then control point also from and to animated this to top
*/

interface Vector {
    x1: number;
    y1: number;

    x2: number;
    y2: number
}

interface WaveProps {
    progress: Animated.SharedValue<number>;
    color: string;
    c1: Vector;
    c2: Vector;
    // c2: Vector;
}


interface WaveTwoProps {
    progress: Animated.SharedValue<number>;
    color: string;
    c1: Vector;
    c2: Vector;
    // c2: Vector;
}


function Wave({ progress, color, c1, c2 }: WaveProps) {
    const data = useDerivedValue(() => {
        return {
            from: { x: 0, y: 0.7 },
            // c1: { x: 0.1, y: 0.4 },
            // c2: { x: 0.2, y: 0.2 },
            to: { x: 1, y: 0.7 }
        }
    })


    const path = useAnimatedProps(() => {
        const { from, to } = data.value;
        const c1ProgressX = mix(progress, c1.x1, c1.x2)
        const c1ProgressY = mix(progress, c1.y1, c1.y2)
        const c2ProgressX = mix(progress, c2.x1, c2.x2)
        const c2ProgressY = mix(progress, c2.y1, c2.y2)
        return {
            d: `M ${from.x} ${from.y} C ${c1ProgressX} ${c1ProgressY} ${c2ProgressX} ${c2ProgressY} ${to.x} ${to.y} V 1 H 0 Z`
        }
    })




    return (
        <G>
            <AnimatedPath animatedProps={path} fill={color} />
            {/* <AnimatedCircle animatedProps={fromCircle} r={0.1} fill="blue" />
            <AnimatedCircle animatedProps={toCircle} r={0.1} fill="blue" />
            <AnimatedCircle animatedProps={c1Circle} r={0.1} fill="green" />
            <AnimatedCircle animatedProps={c2Circle} r={0.1} fill="green" /> */}
        </G>
    )
}



function WaveTwo({ progress, color, c1, c2 }: WaveTwoProps) {
    const data = useDerivedValue(() => {
        return {
            from: { x: 0, y: 0.5 },
            // c1: { x: 0.1, y: 0.4 },
            // c2: { x: 0.2, y: 0.2 },
            to: { x: 1, y: 0.5 }
        }
    })


    const path = useAnimatedProps(() => {
        const { from, to } = data.value;
        const c1ProgressX = mix(progress, c1.x1, c1.x2)
        const c1ProgressY = mix(progress, c1.y1, c1.y2)
        const c2ProgressX = mix(progress, c2.x1, c2.x2)
        const c2ProgressY = mix(progress, c2.y1, c2.y2)
        return {
            d: `M ${from.x} ${from.y} C ${c1ProgressX} ${c1ProgressY} ${c2ProgressX} ${c2ProgressY} ${to.x} ${to.y} V 1 H 0 Z`
        }
    })




    return (
        <G>
            <AnimatedPath animatedProps={path} fill={color} />
            {/* <AnimatedCircle animatedProps={fromCircle} r={0.1} fill="blue" />
            <AnimatedCircle animatedProps={toCircle} r={0.1} fill="blue" />
            <AnimatedCircle animatedProps={c1Circle} r={0.1} fill="green" />
            <AnimatedCircle animatedProps={c2Circle} r={0.1} fill="green" /> */}
        </G>
    )
}


export default function Main() {
    const progress = mountTiming();

    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <View style={[styles.circleContainer]}>
                <Svg width={RADIUS * 2} height={RADIUS * 2} viewBox="0 0 1 1">
                    {/* <Wave progress={progress} color={"red"} /> */}

                    <WaveTwo progress={progress} color={"rgba(255,0,0,0.6)"}
                        // step 1
                        // c1={{ x1: 0.2, y1: 0.2, x2: 0.6, y2: 0.4 }}
                        // c2={{ x1: 0.2, y1: 0.8, x2: 0.7, y2: 0.6 }}

                        // step 2
                        c1={{ x1: 0, y1: 0.1, x2: 0, y2: 0.1 }}
                        c2={{ x1: 0, y1: 0.1, x2: 0, y2: 0.1 }} />
                    <Wave progress={progress} color={"red"}
                        // step 1
                        // c1={{ x1: 0.2, y1: 0.2, x2: 0.6, y2: 0.4 }}
                        // c2={{ x1: 0.2, y1: 0.8, x2: 0.7, y2: 0.6 }}

                        // step 2
                        c1={{ x1: 0.1, y1: 0.4, x2: 0.6, y2: 0.4 }}
                        c2={{ x1: 0.2, y1: 0.2, x2: 0.9, y2: 0.2 }}
                    />

                </Svg>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: RADIUS * 2,
        overflow: "hidden",
        borderWidth: 1
    }
})