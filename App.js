import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Item from "./components/item";
import ItemInput from "./components/item-input";

export default function App() {
  const [enteredItemText, setEnteredItemText] = useState("");
  const [listOfItems, setListOfItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    setListOfItems((prevList) => [
      ...prevList,
      { text: enteredItemText, id: Math.random().toString() },
    ]);
    setEnteredItemText("");
    setShowModal(false);
  }

  function deleteItemHandler(id) {
    setListOfItems((prevList) => {
      return prevList.filter((item) => id !== item.id);
    });
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Item"
        color={"#09BC8A"}
        onPress={handleShowModal}
      />
      <ItemInput
        onPress={addItemHandler}
        onChangeText={itemInputHandler}
        value={enteredItemText}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
      <View style={styles.itemsContainer}>
        <FlatList
          data={listOfItems}
          renderItem={(itemData) => {
            return (
              <Item
                itemText={itemData.item.text}
                onDelete={deleteItemHandler}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  itemsContainer: {
    flex: 9,
  },
  addItemButton: {
    borderBottomColor: "#09BC8A",
    borderBottomWidth: 1,
    marginTop: 16,
    flex: 1,
  },
});
