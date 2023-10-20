import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

function Item({ itemText, onDelete, id }) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.itemItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => setChecked((prevState) => !prevState)}
        style={styles.textContainer}
      >
        <Text style={checked ? styles.pressedItem : styles.itemText}>
          {itemText}
        </Text>
        <Pressable onPress={onDelete.bind(this, id)}>
          <FontAwsomeIcon name="trash" size={20} style={styles.deleteIcon} />
        </Pressable>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  itemItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#004346",
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    padding: 8,
  },
  pressedItem: {
    textDecorationLine: "line-through",
    padding: 8,
    color: "white",
    fontStyle: "italic",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteIcon: {
    margin: 8,
    color: "white",
  },
});
