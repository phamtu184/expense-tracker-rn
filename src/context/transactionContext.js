import React, { createContext } from "react";
import useTransaction from "../hooks/useTransaction";

export const TransactionContext = createContext();
const items = [
  { id: "0", transaction: "buy car", amount: 955 },
  { id: "1", transaction: "sell tv", amount: -456 },
  { id: "2", transaction: "buy phone", amount: 355 },
];
export function TransactionProvider(props) {
  const {
    transactions,
    addTransaction,
    transactionRef,
    amountRef,
  } = useTransaction(items);
  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, transactionRef, amountRef }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
}
