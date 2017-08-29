import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.expense ? props.expense.name : '',
      categoryID: props.expense ? props.expense.categoryID : this.props.category.id,
      price: props.expense ? props.expense.price : 0

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(props){
      if (props.category){
        this.setState(props.category);
      }
    }

    handleChange(e){
      let {name, value, type} = e.target;

      if(type === 'number'){
        try{
          this.setState({
            [name]: parseInt(value)
          })
        } catch(err) {
          console.log(err);
        }
      }else {
        this.setState({
          [name]:value
        })
      }
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.onComplete({...this.state})

      if(!this.props.expense) {
        this.setState({name:'', price: 0});
      }
    }

    render() {
      return (
        <form className='expense-form' onSubmit={this.handleSubmit}>
          <input
            name='name'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            name='price'
            type='number'
            placeholder='price'
            value={this.state.price}
            onChange={this.handleChange}
          />

          <button type='submit'>{this.props.buttonText}</button>
        </form>
      )
    }
  }
}
