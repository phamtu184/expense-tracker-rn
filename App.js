import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Transaction from "./src/components/transaction";
import useTracsaction from "./src/hooks/useTransaction";

const items = [
  { transaction: "buy car", amount: 955 },
  { transaction: "sell tv", amount: -456 },
  { transaction: "buy phone", amount: 355 },
  { transaction: "ádsad", amount: 555 },
];
export default function App() {
  const { transactions, addTransaction } = useTracsaction(items);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.scrollView}
        data={transactions}
        renderItem={({ item }) => (
          <Transaction transaction={item.transaction} amount={item.amount} />
        )}
        keyExtractor={(item) => item.transaction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
