import { Image, StyleSheet, Text, View, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../constants';
import commonStyles from '../../commonStyles';
import { } from "react-native-gesture-handler"
import ImageModal from './ImageModal';

/* 
    Make UI and Item Modal
    implement dragging then snappoints
    create new algo for snapping
    create a module
*/

const images = Array.from({ length: 100 }, (_, index) => {
    return {
        uri: `https://picsum.photos/id/${index + 10}/400/400`,
        width: SCREEN_WIDTH,
        height: 400,
    };
});

interface ImageCompProps {
    uri: string;
    onPress: () => void
}

function ImageComp({ uri, onPress }: ImageCompProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                <Image source={{ uri }} style={[styles.image]} />
            </View>
        </TouchableWithoutFeedback>
    )
}


export default function ImageList() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <View style={[commonStyles.flexOne,]}>
            {/* <ScrollView style={[commonStyles.flexOne]}> */}
            {/* <View style={[styles.container]}>
                    {images.map((item, index) => {
                        return (
                            <ImageComp uri={item.uri} />
                        )
                    })}
                </View> */}
            <FlatList
                style={{}}
                data={images}
                keyExtractor={(_, ind) => ind.toString()}
                // horizontal
                numColumns={4}
                renderItem={({ item, index }) => {
                    return (
                        <ImageComp uri={item.uri} onPress={() => setActiveIndex(index)} />
                    )
                }}
            />
            {/* </ScrollView> */}
            {
                activeIndex && (
                    <ImageModal {...{ images }} />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    image: {
        width: SCREEN_WIDTH / 4,
        height: SCREEN_WIDTH / 4
    }
})