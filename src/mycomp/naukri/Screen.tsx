import { StyleSheet, Text, View, StatusBar, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';

import { MaterialIcons } from "@expo/vector-icons"
import Header from './Header'
import commonStyles from '../../commonStyles'
import SubHeader from './SubHeader'
import Spacing from '../Spacing'
import Colors from './Colors'
import { SCREEN_HEIGHT } from '../../constants';

type Position = { width: number, height: number, x: number, y: number };

export default function Screen() {
    const [footerPositionY, setFooterPositionY] = useState<Position | number>(-1);
    const [tabPosition, setTabPosition] = useState<Position | number>(-1)
    const y = useRef(new Animated.Value(0)).current;

    return (
        <View style={[commonStyles.flexOne,]}>
            <Animated.ScrollView style={[commonStyles.flexOne]}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true })}
            >
                <View>
                    <StatusBar backgroundColor={"#283e56"} barStyle="light-content" />
                    <Header />
                    <SubHeader />
                    <View style={[styles.primaryBg]}>
                        <View style={[commonStyles.row, styles.actionContainer]}>
                            <View>
                                <MaterialIcons name="star" style={[styles.actionIcons]} />
                                <Spacing size={2} />
                                <Text style={[styles.actionText, { textAlign: "center" }]}>Star</Text>
                            </View>
                            <View>
                                <MaterialIcons name="share" style={[styles.actionIcons]} />
                                <Spacing size={2} />
                                <Text style={[styles.actionText, { textAlign: "center" }]}>Star</Text>
                            </View>
                            <View>
                                <MaterialIcons name="card-membership" style={[styles.actionIcons]} />
                                <Spacing size={2} />
                                <Text style={[styles.actionText, { textAlign: "center" }]}>Star</Text>
                            </View>
                        </View>
                        <Spacing />
                    </View>
                    <View style={[styles.tabHeaders, { opacity: 0 }]} onLayout={({ nativeEvent: { layout } }) => setTabPosition(layout)}>
                        <View>
                            <View style={[styles.tabItems]}>
                                <Text style={[styles.tabText, styles.activeTabText]}>Job Details</Text>
                            </View>
                            <View style={{ width: "100%", height: 2, backgroundColor: Colors.blue }} />
                        </View>
                        <View>
                            <View style={[styles.tabItems,]}>
                                <Text style={[styles.tabText, styles.inactiveTabText]}>About Company</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.jobHighlightContainer]}>
                        <View style={[styles.card]}>
                            <Text style={[styles.title]}>Job Highlight</Text>
                            <Spacing size={5} />
                            <Text style={{ textAlign: "justify" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                {"\n"}
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </View>
                    </View>


                    <View style={[styles.jobHighlightContainer]}>
                        <View style={[styles.card]}>
                            <Text style={[styles.title]}>About Company</Text>
                            <Spacing size={5} />
                            <Text style={{ textAlign: "justify" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </Text>
                        </View>
                    </View>


                    <View style={[styles.footer, {
                        opacity: 0
                    }]} onLayout={({ nativeEvent: { layout } }) => {
                        if (footerPositionY !== -1) return
                        setFooterPositionY(layout);
                    }}>
                        <View style={[styles.footerButton]}>
                            <Text style={{ fontSize: 16, color: Colors.white, textAlign: 'center' }}>Apply </Text>
                        </View>
                    </View>

                    {/* similar jobs card */}
                    <View style={[styles.similarJobs]}>
                        <Text style={{ color: Colors.white, fontSize: 16, fontWeight: "bold" }}>20 Similar Jobs</Text>
                        {new Array(10).fill(0).map((_, ind) => {
                            return (
                                <React.Fragment key={ind}>

                                    <Spacing />
                                    <View style={[styles.card]}>
                                        <Text style={[styles.title]}>About Company</Text>
                                        <Spacing size={2} />
                                        <Text style={{ textAlign: "justify" }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </Text>
                                    </View>
                                </React.Fragment>
                            )
                        })}


                    </View>
                </View>
            </Animated.ScrollView>
            {
                typeof footerPositionY === "object" && (

                    <Animated.View style={[styles.footer, {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0, transform: [{
                            translateY: y.interpolate({
                                inputRange: [0, footerPositionY.y - SCREEN_HEIGHT + footerPositionY.height - 1 + StatusBar.currentHeight!,
                                    footerPositionY.y - SCREEN_HEIGHT + footerPositionY.height + StatusBar.currentHeight!,
                                    footerPositionY.y - SCREEN_HEIGHT + footerPositionY.height + 1 + StatusBar.currentHeight!
                                ], outputRange: [0, 0, 0, -1]
                            })
                        }]
                    }]}>
                        <View style={[styles.footerButton]}>
                            <Text style={{ fontSize: 16, color: Colors.white, textAlign: 'center' }}>Apply</Text>
                        </View>
                    </Animated.View>
                )
            }

            {
                typeof tabPosition === "object" && (
                    <Animated.View style={[styles.tabHeaders, {
                        position: "absolute", left: 0, right: 0, top: tabPosition.y, backgroundColor: "#f2f2f2", transform: [{
                            translateY: y.interpolate({
                                inputRange: [-10, -1, 0, 1, tabPosition.y],
                                outputRange: [0, 0, 0, -1, -(tabPosition.y)],
                                extrapolateRight: "clamp"
                            }),

                        }]
                    }]}>
                        <View>
                            <View style={[styles.tabItems]}>
                                <Text style={[styles.tabText, styles.activeTabText]}>Job Details</Text>
                            </View>
                            <View style={{ width: "100%", height: 2, backgroundColor: Colors.blue }} />
                        </View>
                        <View>
                            <View style={[styles.tabItems,]}>
                                <Text style={[styles.tabText, styles.inactiveTabText]}>About Company</Text>
                            </View>
                        </View>
                    </Animated.View>
                )
            }



        </View>
    )
}

const styles = StyleSheet.create({
    footerButton: {
        backgroundColor: Colors.blue,
        borderRadius: 2,
        padding: 10
    },
    footer: {
        padding: 15,
    },
    similarJobs: {
        backgroundColor: Colors.darkPrimary,
        padding: 15
    },
    title: {
        color: Colors.black,
        opacity: 0.7,
        fontWeight: "800",
        fontSize: 16
    },
    card: {
        elevation: 3,
        padding: 10,
        backgroundColor: Colors.white,
        borderRadius: 5
    },
    jobHighlightContainer: {
        padding: 15
    },
    inactiveTabText: {
        color: Colors.grey,
        opacity: 0.7
    },
    activeTabText: {
        color: Colors.blue
    },
    tabText: {
        fontWeight: "bold",
        color: Colors.blue,
        fontSize: 16
    },
    tabItems: {
        padding: 10,
        paddingHorizontal: 25
    },
    tabHeaders: {
        flexDirection: "row",
    },
    actionText: {
        color: Colors.white,
        fontSize: 12
    },
    primaryBg: {
        backgroundColor: Colors.primary
    },

    actionContainer: {
        backgroundColor: Colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25
    },
    actionIcons: {
        fontSize: 40,
        color: "white"
    }
})