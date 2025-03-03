// TransactionTable.jsx
import React from "react";
import "./styles.css";

const transactions = [
  { card: "🔴 4920", type: "Credit", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: 2890.0 },
  { card: "💳 4230", type: "Debit", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: -49.0 },
  { card: "💳 5510", type: "Credit", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: -80.0 },
  { card: "💳 0983", type: "Debit", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: -30.0 },
  { card: "🟠 4443", type: "Credit", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: 1500.0 },
  { card: "💳 7635", type: "Debit", date: "Jun 14, 2023", time: "9:00 am", status: "Rejected", amount: -200.0 },
];

const statusStyles = {
  Verified: "status-verified",
  Rejected: "status-rejected",
  Pending: "status-pending",
};

const TransactionTable = () => {
  return (
    <div className="container">
      <div className="table-container">
        <h2 className="title">Recent Transactions</h2>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Card</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.card} ({tx.type})</td>
                <td>{tx.date} {tx.time}</td>
                <td className={statusStyles[tx.status]}>{tx.status}</td>
                <td className="amount">{tx.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
