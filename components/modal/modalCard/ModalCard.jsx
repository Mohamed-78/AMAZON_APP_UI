import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import NormalButtom from "../../buttons/normalButtom/NormalButtom";

const screenHeight = Dimensions.get("window").height;

const ModalCard = ({ modalVisible, setModalVisible, children }) => {
  const showModalToggle = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            {Platform.OS == "ios" ? (
              <Button title="Fermer" onPress={showModalToggle} />
            ) : (
              <NormalButtom buttonTitle="Fermer" onClick={showModalToggle} />
            )}
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

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
});

export default ModalCard
