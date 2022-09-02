import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Channel } from '../components/Model';
import ThumbnailList from "./ThumbnailList";
import CircularList from "./CircularList";
import Animated, { useSharedValue } from 'react-native-reanimated';

interface ChannelsProps {
    channels: Channel[];
}

export default function Channels({ channels }: ChannelsProps) {
    const index = useSharedValue(0)
    return (
        <View style={[styles.container]}>
            <ThumbnailList channels={channels} index={index} />
            <CircularList channels={channels} index={index} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#1a1b1c"
    }
})