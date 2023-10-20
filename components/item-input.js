import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Pressable,
} from "react-native";

function ItemInput({ onPress, onChangeText, value, isVisible, onClose }) {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <Pressable onPress={onClose} style={styles.inputContainer}>
        <Image source={require("../assets/favicon.png")} style={styles.image} />
        <TextInput
          placeholder="Your Course Item"
          style={styles.textInput}
          onChangeText={onChangeText}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color={"#F80000"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Item" onPress={onPress} color={"#09BC8A"} />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

export default ItemInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(117, 221, 221, .70)",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#172A3A",
    width: "100%",
    padding: 8,
    backgroundColor: "rgba(80, 137, 145, .50)",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 24,
  },
});
