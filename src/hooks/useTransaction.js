import { useState } from "react";

export default (initialValue) => {
  const [transactions, setTransactions] = useState(initialValue);
  const addTransaction = (transaction, amount) => {
    const item = {
      id: transactions.length.toString(),
      transaction,
      amount: Number(amount),
    };
    setTransactions([...transactions, item]);
  };
  return {
    transactions,
    addTransaction,
  };
};
