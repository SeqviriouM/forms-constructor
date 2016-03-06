import { List, Map, fromJS } from 'immutable';


const initState = Map({
  name: 'form',
  method: 'get',
  title: 'Form',
  components: List(),
});

const defaultComponent = {
  title: 'Default title',
  formControl: Map(),
};

export function form(state = initState, action) {
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
    case 'CANCEL_DELETION_COMPONENT':
      index = state.get('components').findIndex(item => item.get('id') === action.payload.id);
      return state.set('components', state.get('components').setIn([index, 'isDeleted'], false));
    case 'UPDATE_COMPONENTS':
      return state.set('components', fromJS(action.payload.components));
    default:
      return state;
  }
}
