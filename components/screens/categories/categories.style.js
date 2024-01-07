import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
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
    categoryCardPosition:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 15,
    },
    categoryItem: {
        width: "48%",
        marginBottom: 15,
    },
    cardContent: {
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: "rgba(168, 168, 168, 1)",
        elevation: 5,
        margin: 5,
    },
    categoryTitle:{
        textAlign: "center",
        fontSize: 17,
        color: "gray",
        marginTop: 5
    },
})
export default styles;