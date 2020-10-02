import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import Transaction from "./transaction";
import { TransactionContext } from "../context/transactionContext";

export default function ListTransaction() {
  const { transactions } = useContext(TransactionContext);
  return (
    <FlatList
      contentContainerStyle={styles.scrollView}
      data={transactions}
      renderItem={({ item }) => (
        <Transaction transaction={item.transaction} amount={item.amount} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});
