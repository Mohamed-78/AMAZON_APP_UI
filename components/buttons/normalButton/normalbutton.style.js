import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.semibold,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width:"100%",
        height: 50,
        borderRadius: 5
    },
    text:{
        color: COLORS.medium,
        fontWeight: "bold",
        fontSize: 20
    }
})
export default styles;