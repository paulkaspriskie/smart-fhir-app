import React from 'react';


class PatientInfoBlock extends React.Component {

  componentDidMount() {
    var dataArr = Object.values(this.props.data);

    dataArr[5].map((items, i) => {
      const name = items.resource.name[0].text;
      const gender = items.resource.gender;
      const dob = items.resource.birthDate;
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
