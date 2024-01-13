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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxText:{
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 15
  },
  menuBox:{
    width: "100%",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: "rgba(168, 168, 168, 1)",
    elevation: 10,
    borderRadius: 10
  },
  secondHorizontalLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCD7E1",
    alignSelf: "center",
    width: "90%",
    height: 0.4,
    },
    p7:{
        padding: 7,
    },
    p10:{
        padding: 10,
    }
});

export default styles;
