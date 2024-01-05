import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
       flex: 0.5,
    },
    flexPosition: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
    },
    iconSize: {
        marginLeft: -5,
        width: 80,
        height: 80
    },
    productText: {
        fontSize: 16,
        color: "gray",
    },
    productCategoryText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5,
    },
    price:{
        marginTop: 5,
        fontSize: 16,
        color: "black"
    },
    description:{
        marginTop: 5,
        fontSize: 14,
        color: "gray",
    },
    ratingCount:{
        marginLeft: 5,
        color: COLORS.semibold
    },
    marginTop:{
        marginTop: -20
    },
    marginBottom:{
        marginBottom: 20
    },
    descriptionContainer:{
        // flex: 1,
        paddingHorizontal: 20,
        width: "100%",
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: "rgba(168, 168, 168, 1)",
        elevation: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    reviewsHeader:{
        padding:20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    reviewsText:{
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
    userImage:{
        width:70,
        height:70,
    },
    reviewsElement:{
        marginLeft:20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
    },
    userFlexElement:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        width: "80%"
    },
    userInformationsElement:{
        marginLeft: 25
    },
    reviewsUserName:{
        marginTop: "-25%"
    },
    reviewsDescription:{
        marginTop: "10%"
    },
    footer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: "rgba(168, 168, 168, 1)",
        elevation: 10,
    }
})

export default styles;