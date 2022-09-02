import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../commonStyles'
import MaskView from "@react-native-community/masked-view"
import { SCREEN_WIDTH } from '../../constants'

const Overlay = () => {
    return (
        <View style={[{ ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)" }]}>
        </View>
    )
}

const Scanner = () => {
    return (
        <View style={[commonStyles.flexOne, commonStyles.center, { backgroundColor: "transparent" }]}>
            <View style={{ width: SCREEN_WIDTH / 2, height: SCREEN_WIDTH / 2, backgroundColor: "black", borderRadius: 40 }}></View>
        </View>
    )
}


export default function QRCode() {
    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <MaskView maskElement={<Scanner />} style={{ ...StyleSheet.absoluteFillObject }}>
                <Overlay />
            </MaskView>
        </View>
    )
}

const styles = StyleSheet.create({})