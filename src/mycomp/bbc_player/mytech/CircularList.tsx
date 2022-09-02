import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../../constants'
import { Channel } from './Model';
import Animated from 'react-native-reanimated';

const D = SCREEN_WIDTH * 1.2
const innerR = D / 2;

interface Props {
    channels: Channel[];
    index: Animated.SharedValue<number>
}


export default function CircularList({ channels }: Props) {
    const a = Math.sin(Math.PI / channels.length)
    const r = innerR * a - (1 - a);
    const R = innerR + 2 * r

    return (
        <View style={[styles.container, {
            width: R * 2,
            height: R * 2,
            borderRadius: R,
            top: D + r,
            left: -(R - SCREEN_WIDTH / 2)
        }]}>
            {channels.map((_, ind) => {
                return (
                    <View style={{}}>
                        <Text>{ind + 1}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "red",

    }
});