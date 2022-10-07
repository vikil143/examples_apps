import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../commonStyles'

export default function Parallax() {
    return (
        <View style={[commonStyles.flexOne, { backgroundColor: "white" }]}>
            <Text>Parallax</Text>
        </View>
    )
}

const styles = StyleSheet.create({})