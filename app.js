var groceryItems = ['Apples', 'Bananas', 'Carrots'];


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onGroceryListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'underline' : 'none'
    };
    return (
      <li style={style} onClick={this.onGroceryListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item = {item} />)}
  </ul>
);


ReactDOM.render(<GroceryList items={groceryItems}/>, document.getElementById("app"));
