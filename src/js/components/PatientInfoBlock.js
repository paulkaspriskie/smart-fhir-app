import React from 'react';


class PatientInfoBlock extends React.Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    var patientId = event.target.value;
    var url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=' + patientId;

    fetch(url, {
      method: 'get',
      headers: { "Accept": "application/json+fhir" }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  }
//code.text

  render() {
    return (
      <div className="patient-info-card">
        {
          this.props.data.map((items, i) => {
            const name = items.resource.name[0].text;
            const gender = items.resource.gender;
            const dob = items.resource.birthDate;
            const id = items.resource.id;

            return (
              <div key={i}>
                <h2>{name}</h2>
                <p>Gender: {gender}</p>
                <p>Birthdate: {dob}</p>
                <button value={id} onClick={this.onButtonClick}>View conditions</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default PatientInfoBlock;
