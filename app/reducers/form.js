import { fromJS } from 'immutable';
import { FORM, COMPONENT, OPTION } from '../constants';

const defaultForm = FORM;
const defaultComponent = COMPONENT;

export function form(state = defaultForm, action) {
  let newComponent = Object.assign({}, defaultComponent);
  let index = null;
  let optionIndex = null;
  let newId = null;
  let newOption = OPTION;

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
    case 'UPDATE_COMPONENT':
      index = state.get('components').findIndex(item => item.get('id') === action.payload.currentId);
      return state.setIn(['components', index, 'formControl', 'config', action.payload.type], fromJS(action.payload.value));
    case 'UPDATE_FORM_CONFIG':
      return state.setIn(['config', action.payload.type], fromJS(action.payload.value));
    case 'ADD_CONTROL':
      index = state.get('components').findIndex(item => item.get('id') === action.payload.currentId);
      return state.set('components', state.get('components').setIn([index, 'formControl'], fromJS(action.payload.control)));
    case 'ADD_OPTION':
      debugger;
      index = state.get('components').findIndex(item => item.get('id') === action.payload.currentId);
      newId = state.getIn(['components', index, 'formControl', 'config', 'lastOptionId']) + 1;
      newOption = fromJS(Object.assign(newOption, { id: newId }));
      return state.setIn(['components', index, 'formControl', 'config', 'options'], state.getIn(['components', index, 'formControl', 'config', 'options']).push(newOption));
    case 'UPDATE_OPTION':
      debugger;
      index = state.get('components').findIndex(item => item.get('id') === action.payload.currentId);
      optionIndex = state.getIn(['components', index, 'formControl', 'config', 'options']).findIndex(item => item.get('id') === action.payload.optionId);
      return state.setIn(['components', index, 'formControl', 'config', 'options', optionIndex, action.payload.type], fromJS(action.payload.value));
    default:
      return state;
  }
}
