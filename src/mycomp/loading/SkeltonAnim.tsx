import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import MaskedView from '@react-native-community/masked-view';
import { mountLoop } from '../../animation_helpers/hooks';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
// import ComponentClass, { LinearGradient as LinearGradientType,LinearGradientProps } from "expo-linear-gradient/build/LinearGradient"
// import LinearGradient from "expo-linear-gradient"

// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);


const THEIGHT = 100;

const Loader = () => {
    return (
        <View style={{
            // backgroundColor: "#e1e9ee",
            backgroundColor: "black",
            width: SCREEN_WIDTH - 30,
            height: THEIGHT
        }} />
    )
}



export default function SkeltonAnim() {
    const progress = mountLoop(2000, -1, false)



    const loaderStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: interpolate(progress.value, [0, 1], [-100, SCREEN_WIDTH]) }]
        }
    })


    return (
        <View style={{ flex: 1 }}>
            {/* <View> */}
            <MaskedView style={{ flex: 1 }}
                maskElement={
                    <View style={{ padding: 10, backgroundColor: "transparent" }}>
                        <View style={{
                            // backgroundColor: "#e1e9ee",
                            backgroundColor: "black",
                            width: "100%",
                            height: THEIGHT + 100
                        }} />

                        <View style={{ padding: 10, backgroundColor: "transparent" }} />
                        <View style={{ flexDirection: "row", backgroundColor: "transparent", justifyContent: "space-between" }}>
                            <View style={{
                                width: "30%",
                                height: THEIGHT, backgroundColor: "black"
                            }} />
                            <View style={{
                                width: "30%",
                                height: THEIGHT, backgroundColor: "black"
                            }} />
                            <View style={{
                                width: "30%",
                                height: THEIGHT, backgroundColor: "black"
                            }} />
                        </View>
                        <View style={{ padding: 10, backgroundColor: "transparent" }} />
                        <View style={{
                            // backgroundColor: "#e1e9ee",
                            backgroundColor: "black",
                            width: "100%",
                            height: THEIGHT + 100
                        }} />

                        <View style={{ padding: 10, backgroundColor: "transparent" }} />
                        <View style={{ flexDirection: "row", backgroundColor: "transparent", justifyContent: "space-between" }}>
                            <View style={{
                                width: "30%",
                                height: THEIGHT, backgroundColor: "black"
                            }} />
                            <View style={{
                                width: "30%",
                                height: THEIGHT, backgroundColor: "black"
                            }} />
                            <View style={{
                                width: "30%",
                                height: THEIGHT, backgroundColor: "black"
                            }} />
                            {/* <View style={{ width: THEIGHT, height: THEIGHT, borderRadius: THEIGHT / 2, backgroundColor: "black" }} /> */}
                        </View>
                    </View>
                }
            >
                <View style={{ flex: 1, }}>
                    <View style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: "#e1e9ee",
                    }} />

                    <Animated.View
                        style={[StyleSheet.absoluteFillObject, styles.loader, loaderStyle]}

                    />
                </View>
            </MaskedView>
            {/* </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        width: 100,
        backgroundColor: "red",
        height: SCREEN_HEIGHT * 2,
    }
})