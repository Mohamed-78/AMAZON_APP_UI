import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerHeight: {
    height: "17%",
    backgroundColor: COLORS.bold,
  },
  displayPosition: {
    padding: "5%",
    paddingVertical: "14%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconSize: {
    width: 22,
    height: 22,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.medium,
  },
  imageSize: {
    width: 175,
    height: 175,
  },
  containerCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  cartImageSize: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  productTitle:{
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.bold
  },
  price:{
    fontSize: 17,
    color: 'gray',
    marginTop: 5,
  },
  qteBtnText:{
    color: "gray",
    fontWeight: "700",
    fontSize: 16
  },
  quantiteText:{
    color: "#000",
    fontWeight: "bold",
  },
  secondHorizontalLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCD7E1",
    alignSelf: "center",
    width: "100%",
    height: 1,
    },
    cartBox:{
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
    footerText:{
        color: "gray",
        fontSize: 17
    },
    footerPrice:{
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
    },
    totalPriceText:{
        color: COLORS.bold,
        fontSize: 17.5,
        fontWeight: "bold",
    },
    totalPrice:{
        color: COLORS.bold,
        fontSize: 17.5,
        fontWeight: "bold",
    },
    marginTopBtn:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginBottom: 20,
    }
});

export default styles;
