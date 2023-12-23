import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop: -25,
        flex: 1,
        padding: "5%",
        paddingVertical: "10%",
    },
    categoryHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    categoryText:{
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
    cardsContainer: {
        padding: 0,
    },
})

export default styles;