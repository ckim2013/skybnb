import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LodgingForm from './lodging_form';
import { fetchLodging, editLodging,
         makeLodging } from '../../actions/lodging_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  let lodging;
  //  = state.entities.lodgings[state.ui.lodgingDisplay],

  if (ownProps.match.path.slice(1) === 'lodgings') {
    formType = 'Create';
    lodging = {
      title: '',
      street: '',
      city: '',
      country: '',
      image_url: '',
      rate: 0,
      room_type: '',
      beds: 0,
      bedrooms: 0,
      bathrooms: 0,
      guests: 0,
      check_in: '',
      amenities: [],
      bio: ''
    };
  } else {
    formType = 'Edit';
    lodging = state.entities.lodgings[ownProps.match.params.lodgingId];
  }
  return ({
    formType,
    lodging
  });
};
// action
const mapDispatchToProps = (dispatch, ownProps) => {
  let action = editLodging;
  if (ownProps.match.path.slice(1) === 'lodgings') {
    action = makeLodging;
  }
  return ({
    fetchLodging: id => dispatch(fetchLodging(id)),
    action: lodging => dispatch(action(lodging)) 
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LodgingForm);
