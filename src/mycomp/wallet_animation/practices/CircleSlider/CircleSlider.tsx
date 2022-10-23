import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Animated from 'react-native-reanimated';
import commonStyles from '../../../../commonStyles'
import { SCREEN_WIDTH } from '../../../../constants';
import Footer from './Footer';


export default function CircleSlider() {
    return (
        <View style={[commonStyles.flexOne, styles.container]}>
            <View style={[commonStyles.flexOne]} />
            <Footer />
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: "white"
    }
})