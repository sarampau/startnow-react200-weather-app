const defaultState = {
  input: '',
  city: '',
  listItems: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SEARCH_INPUT': {
      return Object.assign({}, state, { input: payload.input });
    }
    case 'GET_WEATHER_PENDING':
      return state;

    case 'GET_WEATHER_FULFILLED': {
      const listItem = {
        name: action.payload.data.name,
        time: new Date()
      };
      const newListItems = [...state.listItems];
      newListItems.unshift(listItem);
      return {
        ...state,
        city: action.payload.data,
        listItems: newListItems
      };
    }
    case 'GET_WEATHER_REJECTED':
      return state;

    default:
      return state;

  }
}
