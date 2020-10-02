import React from "react";
import { StyleSheet, View } from "react-native";
import { TransactionProvider } from "./src/context/transactionContext";
import FormAddTrans from "./src/components/formAddTrans";
import ListTran from "./src/components/listTransaction";

export default function App() {
  return (
    <TransactionProvider>
      <View style={styles.container}>
        <FormAddTrans />
        <ListTran />
      </View>
    </TransactionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
