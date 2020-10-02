import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Transaction = (props) => {
  const { transaction, amount } = props;
  return (
    <TouchableOpacity>
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
    </TouchableOpacity>
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

Transaction.propTypes = {
  transaction: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Transaction;
