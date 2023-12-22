import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
       marginTop: "10%"
    },
    dealsHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dealsText:{
        fontWeight: "bold",
        fontSize: 22,
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