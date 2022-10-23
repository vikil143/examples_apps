import { StyleSheet } from "react-native"

const commonStyles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    flexTwo: {
        flex: 2
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        flexDirection: "row"
    },
    rowAlignCenter: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default commonStyles;