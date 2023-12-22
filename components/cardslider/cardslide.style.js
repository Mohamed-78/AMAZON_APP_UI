import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    imageSize:{
        width: 140,
        height: 140,
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
    imageContent:{
        padding: 3,
    },
    categoryTitle:{
        textAlign: "center",
        fontSize: 17,
        color: "gray",
        marginTop: 5
    }
})
export default styles;