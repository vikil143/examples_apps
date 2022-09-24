import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../constants';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

interface Props {
    images: { uri: string; width: number; height: number }[]
}

export default function ImageModal({ images }: Props) {


    const style = useAnimatedStyle(() => {
        return {

        }

    })
    return (
        <PanGestureHandler>
            <Animated.View style={[styles.container, style]}>
                {
                    images.map((item, ind) => {
                        return (
                            <View style={[styles.imageContainer]}>
                                <Image source={{ uri: item.uri }} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }} />
                            </View>
                        )
                    })
                }
            </Animated.View>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "black",
        flexDirection: "row",
    }
})