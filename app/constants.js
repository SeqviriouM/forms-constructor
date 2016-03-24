import { List, Map } from 'immutable';

const DEFAULT_CONTROL_STYLE = {
  color: '#000',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '0px',
  paddingRight: '0px',
}
const CONTROLS = {
  INPUT: {
    name: 'defaultName',
    placeholder: '',
    size: 'm',
    style: DEFAULT_CONTROL_STYLE,
  },
  SELECT: {
    name: 'defaultName',
    placeholder: '',
    size: 'm',
    style: DEFAULT_CONTROL_STYLE,
  },
  DATEPICKER: {
    name: 'defaultName',
    placeholder: '',
    size: 'm',
    style: DEFAULT_CONTROL_STYLE,
  },
  LABEL: {
    name: 'defaultName',
    placeholder: '',
    size: 'm',
    style: DEFAULT_CONTROL_STYLE,
  },
  CHECKBOX: {
    name: 'defaultName',
    placeholder: '',
    size: 'm',
    style: DEFAULT_CONTROL_STYLE,
  },
  RADIO: {
    name: 'defaultName',
    placeholder: '',
    size: 'm',
    style: DEFAULT_CONTROL_STYLE,
  },
};

const FORM = new Map({
  name: 'form',
  method: 'get',
  title: 'Form',
  components: List(),
});

const COMPONENT = {
  title: 'Default title',
  formControl: Map(),
};

module.exports = {
  FORM,
  COMPONENT,
  CONTROLS,
};
