import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialIcons } from "@expo/vector-icons"

export default function Header() {
    return (
        <View style={[styles.container]}>
            <MaterialIcons name="arrow-back" style={{ color: "white", fontSize: 25 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#283e56", padding: 15, flexDirection: "row"
    }
})