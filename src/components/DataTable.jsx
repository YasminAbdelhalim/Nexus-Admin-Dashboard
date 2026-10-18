
const transactions = [
  { id: 1, customer: "Ahmed Ali", date: "2026-10-15", amount: "$250", status: "Completed" },
  { id: 2, customer: "Sara Mohamed", date: "2026-10-16", amount: "$120", status: "Pending" },
  { id: 3, customer: "Omar Hassan", date: "2026-10-17", amount: "$450", status: "Completed" },
  { id: 4, customer: "Mona Adel", date: "2026-10-18", amount: "$180", status: "Cancelled" },
];

function DataTable() {
  return (
    <div className="table-container">
      <h2>Recent Transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.customer}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
