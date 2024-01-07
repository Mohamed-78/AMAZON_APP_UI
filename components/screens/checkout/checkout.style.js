import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    headerHeight:{
        height: "17%", 
        backgroundColor: COLORS.bold,
    },
    displayPosition:{
        padding: "5%",
        paddingVertical: "14%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconSize:{
        width: 22,
        height: 22
    },
    headerTitle:{
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.medium
    },
    imageSize:{
        width: 175,
        height: 175,
    },
});

export default styles;
