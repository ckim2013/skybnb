import React from 'react';

class LodgingForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("inside lodging form", props);
  }

  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    if (this.props.formType !== newProps.formType) {
      console.log('currentprops and newprops different');
    } else {
      console.log('same');
    }
  }

  render() {

    return (
      <div className='lodging-form'>
        Inside the lodging form!
      </div>
    );
  }
}

export default LodgingForm;
