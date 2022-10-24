import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { data } from './data'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackTypes } from './types'
import commonStyles from '../commonStyles'

type Navigation = StackNavigationProp<StackTypes, "AllScreen">

interface Props {
    navigation: Navigation;
}

export default function AllScreens({ navigation }: Props) {
    return (
        <View style={[commonStyles.flexOne,]}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
                            <View style={{ padding: 15 }}>
                                <Text style={{ fontSize: 16 }}>{index + 1 + ")"}   <Text style={{ fontWeight: "bold" }}>{item.name}</Text></Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{ width: "100%", height: 1, backgroundColor: "#333" }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({})