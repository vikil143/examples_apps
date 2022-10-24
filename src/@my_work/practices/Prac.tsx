import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../commonStyles';
import { mountLoop } from '../../animation_helpers/hooks';
import Animated from "react-native-reanimated"


const SIZE = 200;
/*
  Observations 2D
    1]. TranslateX
    ==> positive 
     1>. 50 => moves left to right => goes in right directions
    ==> negitive
     1>.-50 => move right to left => goes left direction  
    2]. TranslateY
    ==> positive 
     1>. 50 => move top to bottom => goes bottom direction
    ==> negitive
     1>.-50 => move bottom to top => goes up direction
    2]. rotate
    ==> rotation would be done in two degrees deg and rad
    ==> positive 
     1>. 20 deg or 20 rad
     ==> clock direction
     2>.-20deg or 20 rad
     ==> anti-clock direction

*/

export default function Prac() {
    const progress = mountLoop();
    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <View>
                <View style={[commonStyles.row]}>
                    <Animated.View style={[styles.box,
                    { borderRadius: 5, backgroundColor: "green", transform: [{ rotateY: "-40deg" }, { perspective: 200 }] }]} />
                    <View style={[styles.box,
                    { borderRadius: 5, transform: [{ rotateY: "40deg" }, { perspective: 200 }] }]} />
                </View>
                {/* <View style={[styles.box,
                { borderWidth: 1, position: "absolute", backgroundColor: "transparent" }]} /> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        width: SIZE,
        height: SIZE,
        backgroundColor: "red"
    }
})