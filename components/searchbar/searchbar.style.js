import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "-8%",
        height: 50,
        width: "90%",
    },
    searchWrapper: {
        backgroundColor: "#ffff",
        flex: 1,
        flexDirection: 'row', 
        justifyContent: "center",
        alignItems: "center",
        gap: -40,
        borderRadius: 40,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 20,
        shadowRadius: 2,
        shadowColor: "rgba(67, 67, 67, 2)",
    },
    searchInput: {
        width: "100%",
        height: 50,
        textAlign: "center",
        fontSize: 15,
    },
    searchIcon:{
        width: 20,
        height: 20,
    },
})

export default styles;