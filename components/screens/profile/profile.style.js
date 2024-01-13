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
    alignItems: "center",
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
    width: 50,
    height: 50,
  },
  headerPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  userInformations:{
    marginLeft: 20,
  },
  userName:{
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.medium
  },
  userEmail:{
    marginTop: 2,
    color: COLORS.medium
  },
  boxElementPosition:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxText:{
    marginLeft: 15
  }
});

export default styles;
