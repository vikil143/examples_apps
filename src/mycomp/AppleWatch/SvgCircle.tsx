import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Path, } from "react-native-svg"

interface Props {
    r: number;
}

export default function SvgCircle({ r }: Props) {
    return (
        <View>
            <Svg width={r * 2} height={r * 2} viewBox="0 0 1 1">
                {/* <Circle cx={0.5} cy={0.5} stroke="blue" r={"0.5"} /> */}
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({})