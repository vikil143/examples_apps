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
    }
});

export default commonStyles;