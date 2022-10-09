import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacing from '../Spacing'

export default function SubHeader() {
    return (
        <>
            <View style={[styles.container]}>
                <Text style={[styles.whiteColor, styles.title]}>Senoir React Native Developer</Text>
                <Text style={[styles.whiteColor, styles.subTitle]}>Mypcot Infotech </Text>
                <Spacing />
                <View style={[styles.lineContainer]}>
                    <View style={[styles.line]} />
                </View>
                <Spacing size={5} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    line: {
        width: "100%",
        height: 0.3,
        backgroundColor: "white"
    },
    lineContainer: {
    },
    subTitle: {
        fontSize: 16
    },
    title: {
        fontSize: 19
    },
    whiteColor: { color: "white" },
    container: {
        backgroundColor: "#283e56",
        padding: 15,
        paddingVertical: 5
    }
})