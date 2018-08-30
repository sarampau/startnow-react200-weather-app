import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    listItems: store.search.listItems
  };
}

export default connect(mapStoreToProps)(History);
