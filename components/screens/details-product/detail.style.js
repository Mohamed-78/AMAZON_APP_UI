import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 80,
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
  price: {
    marginTop: 5,
    fontSize: 16,
    color: "black",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  ratingCount: {
    marginLeft: 5,
    color: COLORS.semibold,
  },
  marginTop: {
    marginTop: -20,
  },
  marginBottom: {
    marginBottom: 20,
  },
  descriptionContainer: {
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
  reviewsHeader: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewsText: {
    fontWeight: "bold",
    fontSize: 22,
    color: COLORS.bold,
  },
  chevronIcon: {
    width: 25,
    height: 25,
  },
  rightIconTouchable: {
    marginTop: "2.5%",
  },
  userImage: {
    marginTop: "-10%",
    width: 50,
    height: 50,
  },
  reviewsMargin: {
    marginLeft: 20,
    marginBottom: 15,
  },
  reviewsElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  userFlexElement: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    width: "80%",
  },
  userInformationsElement: {
    marginLeft: 25,
  },
  reviewsUserName: {
    marginTop: "-25%",
  },
  reviewsDescription: {
    marginTop: "10%",
  },
  footer: {
    padding: "5%",
    margin: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "relative",
    top: "10%",
    width: "100%",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: "rgba(168, 168, 168, 1)",
    elevation: 10,
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
  },
  QtePosition:{
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewBottomQte:{
    flexDirection: "row", 
    alignItems: "center"
},
qteBtn: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.semibold,
},
touchQteBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
},
});

export default styles;
