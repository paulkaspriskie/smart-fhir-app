import React from 'react';


class PatientInfoBlock extends React.Component {

  componentDidMount() {
    this.props.data.map((items, i) => {
      const name = items.resource.name[0].text;
      const gender = items.resource.gender;
      const dob = items.resource.birthDate;
      console.log(name);
    });
  }

  render() {
    return (
      <div className="patient-info-card">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default PatientInfoBlock;
