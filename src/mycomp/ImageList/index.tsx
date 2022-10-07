import { Image, StyleSheet, Text, View, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useState } from 'react'
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

const ImageComp = ({ uri, onPress }: ImageCompProps) => {
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
    const ImageRef = useRef<React.LegacyRef<View>>(null);

    return (
        <View style={[commonStyles.flexOne,]}>

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
            <ImageModal {...{ images, activeIndex }} />

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