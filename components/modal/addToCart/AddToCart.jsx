import React from "react";
import { View, Text, Pressable } from "react-native";
import ModalCard from "../modalCard/ModalCard";
import styles from "./addtocart.style";

const AddToCart = ({
  options,
  selected,
  setSelected,
  style,
  element_index = null,
  variant,
  error,
  disabled = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const showModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {variant === "border" ? (
        <>
          <Pressable
            disabled={disabled}
            style={[
              styles.border,
              { ...style },
              disabled && {
                backgroundColor: disabled ? "#53B0FF" : "transparent",
              },
            ]}
            onPress={showModalToggle}
          >
            <Text style={{ fontSize: 15 }}>{selected}</Text>
            <Image
              source={icons.arrowGray}
              style={[styles.icon, { height: 12, width: 12 }]}
            />
          </Pressable>
          {error && <Text style={{ color: COLORS.error }}>{error}</Text>}
        </>
      ) : (
        <>
          <Pressable
            disabled={disabled}
            style={[
              styles.box,
              { ...style },
              disabled && {
                backgroundColor: disabled ? "#53B0FF" : "transparent",
              },
            ]}
            onPress={showModalToggle}
          >
            <Text style={styles.selected}>{selected}</Text>
            <Image source={icons.bottomArrow} style={styles.icon} />
          </Pressable>
          {error && <Text style={{ color: COLORS.error }}>{error}</Text>}
        </>
      )}
      <ModalCard modalVisible={showModal} setModalVisible={setShowModal}>
        <View>
          <Text>MODAL</Text>
        </View>
      </ModalCard>
    </>
  );
};

export default AddToCart;
