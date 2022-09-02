import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ball from './Ball'
import commonStyles from '../../commonStyles';
// import commonStyles from '../../commonStyles'



const SCROLL_MARGIN = 20;
const IPOD_MARGIN = 20;
const SCREEN_WIDTH =
    Dimensions.get('window').width - IPOD_MARGIN * 2 - SCROLL_MARGIN * 2;
export const BIG_BALL_SIZE = 200;
const SMALL_BALL_SIZE = 50;
export const INNER_BALL_SIZE = BIG_BALL_SIZE - SMALL_BALL_SIZE * 2;
const TRANSLATE_VALUE = 150;

export default function Screen() {
    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <View style={[styles.ballWrapper]}>
                <View style={styles.innerBall}>
                    <Ball translateTillX={TRANSLATE_VALUE} translateTillY={TRANSLATE_VALUE} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    ballWrapper: {
        borderWidth: 0,
        borderRadius: BIG_BALL_SIZE,
        width: BIG_BALL_SIZE,
        height: BIG_BALL_SIZE,
        // marginLeft: SCREEN_WIDTH / 2 - BIG_BALL_SIZE / 2 + SCROLL_MARGIN,
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: 'white',
    },


    innerBall: {
        position: 'absolute',
        width: INNER_BALL_SIZE,
        height: INNER_BALL_SIZE,
        borderRadius: INNER_BALL_SIZE,
        top: SMALL_BALL_SIZE,
        left: SMALL_BALL_SIZE,
        backgroundColor: '#D3D3D3',
        justifyContent: "center",
        alignItems: "center"
    },
})