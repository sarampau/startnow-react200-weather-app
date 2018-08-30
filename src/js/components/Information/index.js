import { connect } from 'react-redux';
import Information from './Information';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
  };
}

export default connect(mapStoreToProps)(Information);
