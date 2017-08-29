import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expenses-action.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseUpdate, expenseDelete} = this.props;

    return (
      <section className='expense-item'>
        <div>
          <div className='content'>
            <h2>{expense.title}</h2>
            <button onClick={() => expenseDelete(expense)}>X</button>
          </div>
          <div className='editing'>
            <ExpenseForm
              buttonText='update'
              expense={expense}
              onComplete={expenseUpdate} />
          </div>
        </div>
      </section>
    )
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense)=>
  dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
