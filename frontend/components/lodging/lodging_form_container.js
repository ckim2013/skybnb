import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LodgingForm from './lodging_form';
import { fetchLodging, editLodging,
         makeLodging } from '../../actions/lodging_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = 'edit';
  if (ownProps.match.path.slice(1) === 'lodgings') {
    formType = 'create';
  }
  return ({
    lodging: state.entities.lodgings[state.ui.lodgingDisplay],
    formType
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
    action
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LodgingForm);
