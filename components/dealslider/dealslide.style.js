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
    dealsSubElement:{
        marginTop: -25,
        padding: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    dealsTitle:{
        textAlign: "left",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5
    },
    subTitle:{
        marginTop: 3,
        color: "gray",
        marginBottom: 3
    },
    allText:{
        marginTop: -27
    },
    price:{
        fontSize: 18
    },
    iconSize:{
        marginLeft: -4,
        width: 80,
        height: 80
    },
    playListIcon:{
        width: 20,
        height: 20
    },
    playlistPosition:{
        position: "absolute",
        top: 12,
        right: 10,
    }
})
export default styles;