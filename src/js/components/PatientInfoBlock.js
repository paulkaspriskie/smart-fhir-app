import React from 'react';


class PatientInfoBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ConditionData: {},
      isHidden: true
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  onButtonClick(event) {
    var patientId = event.target.value;
    const url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=' + patientId;

    fetch(url, {
      method: 'get',
      headers: { "Accept": "application/json+fhir" }
    })
    .then(response => response.json())
    .then(data => {
      if (!data.entry) {
        alert('No conditions reported.')
      } else {
        this.setState({ ConditionData: data.entry});
        this.toggleModal();
      }
    }).catch((error) => console.log(error));
  }


  toggleModal() {
    this.setState((prevState) => ({ isHidden: !prevState.isHidden }) )
  }


  render() {
    return (
      <div className="patient-info-card">
        {
          this.props.data ? this.props.data.map((items, i) => {
            const name = items.resource.name[0].text.substr(items.resource.name[0].text.indexOf(" ") + 1);
            const fullName = name + ' ' + items.resource.name[0].text.split(' ')[0].replace(/,/g, '');
            const gender = items.resource.gender;
            const dob = items.resource.birthDate;
            const id = items.resource.id;

            return (
              <div key={i}>
                <h2>{ fullName.toLowerCase() }</h2>
                <p>Gender: {gender}</p>
                <p>Birthdate: {dob}</p>
                <button value={id} onClick={this.onButtonClick}>View conditions</button>
              </div>
            )
          }) : null
        }

        <ul className={this.state.isHidden ? "" : "isVisable"}>
          <h3>Conditions:</h3>
          {
            Object.values(this.state.ConditionData).map((items, i) => {
              return (
                <li key={i}>
                  <a target="_blank" href={'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + items.resource.code.text }>{items.resource.code.text}</a>
                  <span>{items.resource.dateRecorded}</span>
                </li>
              )
            })
          }
          <button onClick={this.toggleModal}>close</button>
        </ul>
      </div>
    );
  }
}

export default PatientInfoBlock;
