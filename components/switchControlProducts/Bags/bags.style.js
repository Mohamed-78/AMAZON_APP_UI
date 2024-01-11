import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
       marginTop: "-2%",
       flex: 1,
       padding: "5%",
    },
    dealsHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dealsText:{
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 19,
        color: COLORS.bold
    },
    chevronIcon:{
        width: 25,
        height: 25,
    },
    rightIconTouchable:{
       marginTop: "2.5%"
    },
    fontSize: 10
})
export default styles;