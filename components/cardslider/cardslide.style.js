import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    imageSize:{
        width: 140,
        height: 140,
    },
    cardContent:{
        paddingVertical: 5,
        // borderRadius: 40,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 20,
        shadowRadius: 2,
        shadowColor: "rgba(67, 67, 67, 2)",
    }
})
export default styles;