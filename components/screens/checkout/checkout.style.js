import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerPadding:{
        padding: 20,
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
    deleveryAddressPosition: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    deleveryAddressText:{
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.bold,
        marginLeft: 13
    },
    deleveryCard:{
        marginBottom: 15,
        padding: 10,
        width: "100%",
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: "rgba(168, 168, 168, 1)",
        elevation: 10,
    },
    AddressCardPosition:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    visaCardCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
    visaCardImage:{
        width: 400,
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    priceContainer:{
        marginTop: 20,
        padding: 20,
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
    spaceBetween:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    deleveryDateText:{
        fontSize: 18,
        color: "gray",
        marginBottom: 15
    },
    deleveryPriceText:{
        fontSize: 18,
        color: "gray",
    },
    secondText:{
        fontSize: 16,
    },
    bottomHorizontalLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "#CCD7E1",
        alignSelf: "center",
        width: "100%",
        height: 1,
    },
    totalPriceText:{
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.bold,
    },
    totalPrice:{
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.bold,
    },
    payButton:{
        padding: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
      },
      modalText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
      },
      modalSubText:{
        fontSize: 15,
        color: "gray",
        marginBottom: 15,
      },
      closeModalText: {
        fontSize: 16,
        color: "#007BFF",
      },
      imgCart:{
        flexDirection:"row",
        justifyContent: "center",
      },
      checkoutText:{
        marginTop: 15,
        fontSize: 22,
        color: "gray",
      }
});

export default styles;
