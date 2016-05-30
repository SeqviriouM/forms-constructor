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
    type: 'input',
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
      type: ''
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  SELECT: {
    type: 'select',
    config: {
      name: 'defaultName',
      size: 'm',
      options: [
        { value: 'option1', label: 'Option 1', id: 0 },
        { value: 'option2', label: 'Option 2', id: 1 }
      ]
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  DATEPICKER: {
    type: 'datepicker',
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  LABEL: {
    type: 'label',
    config: {
      name: 'defaultName',
      placeholder: '',
      size: 'm',
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  CHECKBOX: {
    type: 'checkbox',
    config: {
      name: 'defaultName',
      size: 'm',
      lastOptionId: 1,
      options: [
        { value: 'option1', label: 'Option 1', id: 0 },
        { value: 'option2', label: 'Option 2', id: 1 }
      ]
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  RADIO: {
    type: 'radio',
    config: {
      name: 'defaultName',
      size: 'm',
      lastRadioId: 1,
      options: [
        { value: 'option1', label: 'Option 1', id: 0 },
        { value: 'option2', label: 'Option 2', id: 1 }
      ]
    },
    style: DEFAULT_CONTROL_STYLE,
  },
  BUTTON: {
    type: 'button',
    config: {
      label: 'Submit',
      size: 'm',
      type: 'submit'
    },
    style: {
      color: '#ffffff',
      backgroundColor: '#00bcd4',
      'border-radius': '5px',
      height: '50px',
      'font-size': '20px',
      width: '100%'
    }
  }
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

const OPTION = {
  value: '',
  label: 'Option',
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
  OPTION,
  CS,
  SC,
  A,
};
