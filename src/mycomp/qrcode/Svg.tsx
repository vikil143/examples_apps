import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Rect, Circle, Mask, Defs, G } from "react-native-svg"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants'
import commonStyles from '../../commonStyles'
import { ViewStyle } from '../../types'
import Colors from '../../../constants/Colors'
import { canvas2Polar } from '../../coordinates'


const MARGIN = 20
const RADIUS = (SCREEN_WIDTH - MARGIN * 2) / 2

interface CircleEleProps extends ViewStyle { }

function CircleELe({ style }: CircleEleProps) {
    return (
        <View style={[styles.circleEle]} />
    )
}

interface DigitCircleProps extends ViewStyle {
    index: number
}

function DigitCircles({ index }: DigitCircleProps) {


    const theta = -index * Math.PI / 7;

    const translateX = Math.cos(theta) * (RADIUS - (50 + MARGIN) / 2)

    const translateY = Math.sin(theta) * (RADIUS - (50 + MARGIN) / 2);

    return (
        <View style={[{
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center"
        },
        { transform: [{ translateX }, { translateY }] }
        ]} >
            <Text style={{ color: "black" }}>{index}</Text>
        </View>
    )
}

const NO_OF_ITEM = 10;


export default function SvgEle() {
    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <View style={[commonStyles.center]}>
                <CircleELe />
                {new Array(NO_OF_ITEM).fill(0).map((_, ind) => {
                    return (
                        <DigitCircles index={ind} />
                    )
                })}
            </View>
        </View>
    )
}



// export default function SvgEle() {
//     return (
//         <Svg style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} viewBox="0 0 1 1" width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
//             <Circle cx={0.5} cy={0.5} fill="red" r={0.5} />
//             <Defs>
//                 <Mask id='mask'>
//                     <Circle cx={0.5} cy={0.5} fill="white" r={0.4} />
//                 </Mask>
//             </Defs>
//             <G mask='url(#mask)'>
//                 <Circle cx={0.5} cy={0.5} fill="blue" r={0.5} />
//             </G>
//         </Svg>
//     )
// }

const styles = StyleSheet.create({
    circleEle: {
        width: RADIUS * 2, height: RADIUS * 2, borderRadius: RADIUS, backgroundColor: "black"
    }
})