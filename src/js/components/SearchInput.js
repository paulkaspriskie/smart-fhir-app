import React from 'react';
import PatientInfoBlock from './PatientInfoBlock';

class SearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Search',
      queryResult: {},
      loadComponent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }


  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }


  getInputValue(e) {
    const url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient?name=';

    if(e.keyCode == 13) {

      fetch(url + this.state.inputValue, {
        method: 'get',
        headers: { "Accept": "application/json+fhir" }
      })
      .then(response => response.json())
      .then(data => {
        
        this.setState({
          queryResult: data.entry,
          loadComponent: true
        });
      });

    }

  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          value= {this.state.inputValue}
          onFocus = {() => this.setState({ inputValue: '' })}
          onChange={this.handleChange}
          onKeyDown={this.getInputValue}  />
          { this.state.loadComponent ? <PatientInfoBlock data={this.state.queryResult} /> : null }
      </div>
    );
  }
}

export default SearchInput;
