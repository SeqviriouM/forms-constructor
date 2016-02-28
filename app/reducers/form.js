import { List, Map, fromJS } from 'immutable';

const EMPTY_MAP = Map();
const initState = {
  name: 'form',
  method: 'GET',
  title: 'Form',
  components: List(),
};
const defaultComponent = {
  id: 1000 * Math.random(),
  title: 'Default title',
  formControl: Map(),
}

export function form(state = EMPTY_MAP, action) {
  switch (action.type) {
    case 'INIT':
      return fromJS(initState);
    case 'ADD_COMPONENT':
      return state.set('components', state.get('components').push(fromJS(defaultComponent)));
    default:
      return state;
  }
}
