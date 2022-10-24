import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { StackTypes } from './types';
import Prac from './practices/Prac';
import AllScreens from './AllScreens';
// Version 2
import Stories from './version_two/instragram/Stories';
import TinderSwipe from './version_two/tinder_swipe/TinderSwipe';

const Stack = createStackNavigator<StackTypes>();

export default function Screen() {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="AllScreen" component={AllScreens} />
            <Stack.Screen name="Prac" component={Prac} />
            <Stack.Screen name="Stories" component={Stories} />
            <Stack.Screen name="Tinder" component={TinderSwipe} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})