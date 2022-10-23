import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef } from 'react'
import commonStyles from '../../../commonStyles'
import Card from './Card'
const data = new Array(15).fill(0)

export default function Screen() {
    const y = useRef(new Animated.Value(0)).current
    return (
        <View style={[commonStyles.flexOne, { paddingHorizontal: 10 }]}>
            <Animated.FlatList
                data={data}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true })}
                renderItem={({ index, item }) => { return <Card {...{ index, y }} /> }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})