import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { TransactionContext } from "../context/transactionContext";

export default () => {
  const { addTransaction } = useContext(TransactionContext);
  const [transValue, setTransValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const onPressAddTrans = () => {
    addTransaction(transValue, amountValue);
    setTransValue("");
    setAmountValue("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New transaction:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTransValue(text)}
        value={transValue}
      />
      <Text style={styles.text}>Amount:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAmountValue(text)}
        keyboardType="numeric"
        value={amountValue}
      />
      <View style={styles.button}>
        <Button onPress={onPressAddTrans} title="Add" color="#841584" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
  },
  text: {},
  input: {
    marginVertical: 6,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    marginVertical: 6,
    textAlign: "center",
    width: 130,
  },
});
