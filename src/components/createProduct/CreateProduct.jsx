import React from "react";


export class CreateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      id: '',
      description: '',
      price: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <div className="create_product">
        <form>
          <input type="text" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
          <input type="text" placeholder="Id" onChange={this.handleChange} value={this.state.id} />
          <input type="text" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
          <input type="text" placeholder="Price" onChange={this.handleChange} value={this.state.price} />
        </form>
      </div>
    );
  }
}
