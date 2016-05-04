import { List, Map } from 'immutable';

const DEFAULT_CONTROL_STYLE = {
  color: '#000',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '0px',
  paddingRight: '0px',
};

const CONTROLS = {
  INPUT: {
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  SELECT: {
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  DATEPICKER: {
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  LABEL: {
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  CHECKBOX: {
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  RADIO: {
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
};

const FORM = new Map({
  config: Map({
    name: 'form',
    method: 'get',
    title: 'Form',
  }),
  style: Map(),
  components: List(),
});

const COMPONENT = {
  title: 'Default title',
  formControl: Map(),
};

// Client - Server
const CS = {
};

// Server - Client
const SC = {
};

// Action
const A = {
};

module.exports = {
  FORM,
  COMPONENT,
  CONTROLS,
  CS,
  SC,
  A,
};
