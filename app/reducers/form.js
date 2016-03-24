import { fromJS } from 'immutable';
import { FORM, COMPONENT } from 'constants';

const defaultForm = FORM;
const defaultComponent = COMPONENT;

export function form(state = defaultForm, action) {
  let newComponent = Object.assign({}, defaultComponent);
  let index = null;
  switch (action.type) {
    case 'INIT':
      return fromJS(defaultForm);
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
    case 'ADD_CONTROL':
      index = state.get('components').findIndex(item => item.get('id') === action.payload.currentId);
      return state.set('components', state.get('components').setIn([index, 'formControl'], fromJS(action.payload.control)));
    default:
      return state;
  }
}
