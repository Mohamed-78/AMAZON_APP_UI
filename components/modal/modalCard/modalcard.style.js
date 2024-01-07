import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Alignez le bas du modal à la fin de l'écran
        margin: 0,
      },
      modalContent: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: screenHeight * 0.30, // Utilisez la hauteur en pourcentage
      },
})

export default styles;