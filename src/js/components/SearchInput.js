import React from 'react';


class SearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  componentDidMount() {
    const url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient?name=paul';

  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  getInputValue(e) {
    if(e.keyCode == 13){
      console.log(this.state.inputValue);;
    }
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          defaultValue='Search'
          onChange={this.handleChange}
          onKeyDown={this.getInputValue}  />
      </div>
    );
  }
}

export default SearchInput;
