import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.semibold,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 200,
        height: 40,
        borderRadius: 20
    },
    text:{
        color: COLORS.medium,
        fontWeight: "bold",
        fontSize: 17
    }
})
export default styles;