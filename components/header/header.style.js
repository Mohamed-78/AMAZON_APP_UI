import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerHeight:{
        height: "17%", 
        backgroundColor: COLORS.bold,
    },
    imageSize:{
        width: 120,
        height: 40
    },
    displayPosition:{
        padding: "5%",
        paddingVertical: "14%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconSize:{
        width: 20,
        height: 20,
    },
    iconBackgroundColor:{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: COLORS.medium,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    }
})
export default styles;