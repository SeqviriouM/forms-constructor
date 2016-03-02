import { List, Map, fromJS } from 'immutable';

const EMPTY_MAP = Map();
const initState = {
  name: 'form',
  method: 'get',
  title: 'Form',
  components: List(),
};
const defaultComponent = {
  title: 'Default title',
  formControl: Map(),
};

export function form(state = EMPTY_MAP, action) {
  let newComponent = Object.assign({}, defaultComponent);
  let index = null;
  switch (action.type) {
    case 'INIT':
      return fromJS(initState);
    case 'ADD_COMPONENT':
      newComponent = fromJS(Object.assign(newComponent, action.payload));
      return state.set('components', state.get('components').push(newComponent));
    case 'DELETE_COMPONENT':
      index = state.get('components').findIndex(item => item.get('id') === action.payload.id);
      return state.set('components', state.get('components').setIn([index, 'isDeleted'], true));
    default:
      return state;
  }
}
