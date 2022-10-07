import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import commonStyles from '../../commonStyles';
import { isTruttyValue } from '../../jsHelpers';
import { useTiming } from '../../animation_helpers/hooks';

interface Props {
    images: { uri: string; width: number; height: number }[]
    activeIndex: number | null;
}

export default function ImageModal({ images, activeIndex }: Props) {
    const animatedValue = useTiming(isTruttyValue(activeIndex));

    useEffect(() => {

    }, []);



    const style = useAnimatedStyle(() => {
        return {

        }
    });
    const bgStyle = useAnimatedStyle(() => {
        return {
            opacity: animatedValue.value
        }
    })
    return (
        <View style={[commonStyles.flexOne, { ...StyleSheet.absoluteFillObject, }]} pointerEvents={isTruttyValue(activeIndex) ? "none" : "auto"}>
            <PanGestureHandler>
                <Animated.View style={[styles.container, style]} >
                    <View style={[commonStyles.row]}>
                        {
                            images.map((item, ind) => {
                                return (
                                    <View style={[styles.imageContainer]} key={ind}>
                                        <Image source={{ uri: item.uri }} style={[styles.image]} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </Animated.View>
            </PanGestureHandler>
            {
                !!activeIndex && (
                    <>
                        <Animated.View style={[styles.bgBlack, StyleSheet.absoluteFillObject, commonStyles.flexOne]}>
                        </Animated.View>
                        <Animated.View style={[commonStyles.flexOne, commonStyles.center]}>
                            <Image style={[styles.image]} source={{ uri: images[activeIndex!].uri }} />
                        </Animated.View>
                    </>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    bgBlack: {
        backgroundColor: "black"
    },
    image: { width: SCREEN_WIDTH, height: SCREEN_WIDTH },
    imageContainer: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "black",
        flexDirection: "row",
        transform: [{ translateY: SCREEN_HEIGHT }]
    }
})