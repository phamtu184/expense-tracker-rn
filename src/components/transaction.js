import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default (props) => {
  const { transaction, amount } = props;
  return (
    <View
      style={[
        styles.container,
        amount > 0 ? styles.isIncome : styles.isExpense,
      ]}
    >
      <Text style={styles.titleTodoItem}>{transaction}</Text>
      <Text style={styles.titleTodoItem}>
        {amount > 0 ? "" : "-"}${Math.abs(amount)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleTodoItem: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 15,
    borderRightWidth: 5,
  },
  isIncome: {
    borderColor: "#00ff00",
  },
  isExpense: {
    borderColor: "#ff0000",
  },
});
