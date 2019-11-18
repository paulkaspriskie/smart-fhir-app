import React from 'react';


class PatientInfoBlock extends React.Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    console.log('test');
  }


  render() {
    return (
      <div className="patient-info-card">
        {
          this.props.data.map((items, i) => {
            const name = items.resource.name[0].text;
            const gender = items.resource.gender;
            const dob = items.resource.birthDate;

            return (
              <div key={i}>
                <h2>{name}</h2>
                <p>Gender: {gender}</p>
                <p>Birthdate: {dob}</p>
                <button onClick={this.onButtonClick}>View conditions</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default PatientInfoBlock;
