import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form>
      <input type="text" placeholder="Toll Name" />
      <input type="number" placeholder="Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
