import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LodgingForm from './lodging_form';
import { fetchLodging, editLodging,
         makeLodging } from '../../actions/lodging_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let lodging;
  if (ownProps.match.path.slice(1) === 'lodgings/') {
    formType = 'Create';
    lodging = {
      title: '',
      street: '',
      city: '',
      country: '',
      rate: 1,
      room_type: '',
      beds: 1,
      bedrooms: 1,
      bathrooms: 1,
      guests: 1,
      check_in: '',
      amenities: [],
      bio: ''
    };
  } else {
    formType = 'Edit';
    console.log(ownProps.match.params.lodgingId);
    console.log(state.entities.lodgings);
    lodging = state.entities.lodgings[ownProps.match.params.lodgingId];
  }
  return ({
    formType,
    lodging,
    errors: state.ui.errors.lodgingErrors,
    currentUser: state.ui.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.match.path.slice(1) === 'lodgings/') {
    action = makeLodging;
  } else {
    action = editLodging;
  }
  return ({
    fetchLodging: id => dispatch(fetchLodging(id)),
    action: lodging => dispatch(action(lodging)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LodgingForm);
