import { useState } from "react";

export default (initialValue) => {
  const [transactions, setTransactions] = useState(initialValue);
  const addTransaction = (item) => {
    setTransactions([...transactions, item]);
  };
  return {
    transactions,
    addTransaction,
  };
};
