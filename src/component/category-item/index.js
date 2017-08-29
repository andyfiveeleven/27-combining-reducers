import React from 'react';
import {connect} from 'react-redux';

import {expenseCreate as expenseActionCreate} from '../../action/expenses-action.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'

class CategoryItem extends React.Component {
  render() {
    return (
      <section className='category-item'>
        <button onClick={() => this.props.categoryDelete(this.props.category)}>X</button>

        <div>
          <p>name: {this.props.category.name}</p>
          <p>budget: {this.props.category.budget}</p>
        </div>

        <CategoryForm
          buttonText='update da category'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />

        <ExpenseForm
          buttonText='add expense'
          onComplete={this.props.expenseCreate}
          category={this.props.category}
        />

        {this.props.expenses.map(item =>
          <ExpenseItem key={item.id} expense={item} />
        )}

      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return{
    expenseCreate: (expense) => dispatch(expenseActionCreate(category));
  }
}

export default CategoryItem;
