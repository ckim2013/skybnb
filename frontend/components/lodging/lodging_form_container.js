import { connect } from 'react-redux';
import LodgingForm from './lodging_form';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return ({
    lodging: state.entities.lodgings[state.ui.lodgingDisplay]
  });
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(dispatch);
//   return ({
//     hello: 123
//   });
// };

export default connect(mapStateToProps, null)(LodgingForm);
