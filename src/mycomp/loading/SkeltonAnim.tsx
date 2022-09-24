import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';
import MaskedView from '@react-native-community/masked-view';


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
    return (
        <View style={{ alignItems: "center" }}>
            {/* <View> */}
            <MaskedView style={{ flex: 1 }}
                //  maskElement={
                //     <View style={{ backgroundColor: "transparent" }}>
                //         <Loader />
                //         <View style={{ padding: 10, backgroundColor: "transparent" }} />
                //         <Loader />
                //     </View>
                // }
                maskElement={
                    <View style={{
                        // backgroundColor: "#e1e9ee",
                        backgroundColor: "black",
                        width: SCREEN_WIDTH - 30,
                        height: THEIGHT
                    }} />
                }
            >
                <View style={{ flex: 1, }}>
                    <View style={{
                        // ...StyleSheet.absoluteFillObject,
                        // backgroundColor: "#e1e9ee",
                        backgroundColor: "red",
                        width: SCREEN_WIDTH - 30,
                        height: SCREEN_HEIGHT
                    }} />

                </View>
            </MaskedView>
            {/* </View> */}

        </View>
    )
}

const styles = StyleSheet.create({})