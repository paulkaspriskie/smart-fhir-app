import React from 'react';
import PatientInfoBlock from './PatientInfoBlock';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Search',
      queryResult: {},
      showSVG: false
    };

    this.getInputValue = this.getInputValue.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
  }


  getInputValue(e) {
    this.setState({ inputValue: e.target.value });
  }


  submitRequest(e) {
    const url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient?name=';

    if(e.keyCode == 13) {
      this.setState({ showSVG: true });

      fetch(url + this.state.inputValue, {
        method: 'get',
        headers: { "Accept": "application/json+fhir" }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          queryResult: data.entry,
          showSVG: false
        });
      }).catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          value= {this.state.inputValue}
          onFocus = {() => this.setState({ inputValue: '' })}
          onChange={this.getInputValue}
          onKeyDown={this.submitRequest}  />
        <img className={this.state.showSVG ? "isVisable" : ""} src="assets/icons/grid.svg" />
        { Object.keys(this.state.queryResult).length !== 0 ? <PatientInfoBlock data={this.state.queryResult} /> : null }
        { !this.state.queryResult ? <h3>Sorry no results match ''{this.state.inputValue}''</h3> : null }
      </div>
    );
  }
}

export default App;
