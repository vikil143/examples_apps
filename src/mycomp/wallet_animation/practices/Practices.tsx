import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native'
import React from 'react'
import commonStyles from '../../../commonStyles'
import Spacing from '../../Spacing'

const SIZE = 100

export default function Practices() {
    return (
        <ScrollView>
            <View style={[commonStyles.flexOne]}>
                <Animated.View style={[styles.box, { transform: [{ rotateX: "20deg" }, { perspective: 100 }] }]} />
                <Spacing />
                <Animated.View style={[styles.box, { transform: [{ rotateY: "20deg" }, { perspective: 100 }] }]} />
                <Spacing />
                <Animated.View style={[styles.box]} />
                <Spacing />

                <Animated.View style={[styles.boxText,
                { transform: [{ rotateX: "80deg" }, { perspective: 100 }, { scale: 100 / (100 - 50) }] }]}>
                    <Text>100</Text>
                </Animated.View>
                <Spacing size={5} />
                <Animated.View style={[styles.boxText,
                { transform: [{ rotateX: "40deg" }, { perspective: 100 }, { scale: 100 / (100 - 50) }] }]}>
                    <Text>100</Text>
                </Animated.View>
                <Spacing size={5} />

                <Animated.View style={[styles.boxText, { transform: [{ scale: 100 / (100 - 50) }] }]}>
                    <Text>100</Text>
                </Animated.View>
                <Spacing size={5} />

                <Animated.View style={[styles.boxText, { transform: [{ rotateX: "-40deg" }, { perspective: 100 }, { scale: 100 / (100 - 50) }] }]}>
                    <Text>100</Text>
                </Animated.View>
                <Spacing size={5} />

                <Animated.View style={[styles.boxText,
                { transform: [{ rotateX: "-80deg" }, { perspective: 100 }, { scale: 100 / (100 - 50) }] }]}>
                    <Text>100</Text>
                </Animated.View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    boxText: {
        alignItems: "center",

    },
    box: {
        width: SIZE,
        height: SIZE,
        backgroundColor: "red",
        alignSelf: "center"
    }
})