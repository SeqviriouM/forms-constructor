export function getDefaultData() {
  return {
    type: 'INIT',
  };
}


export function addComponent(data) {
  return {
    type: 'ADD_COMPONENT',
    payload: data,
  };
}


export function deleteComponent(data) {
  return {
    type: 'DELETE_COMPONENT',
    payload: data,
  };
}


export function cancelDeletionComponent(data) {
  return {
    type: 'CANCEL_DELETION_COMPONENT',
    payload: data,
  };
}


export function updateComponents(data) {
  return {
    type: 'UPDATE_COMPONENTS',
    payload: data,
  };
}

export function updateComponent(data) {
  return {
    type: 'UPDATE_COMPONENT',
    payload: data
  };
}

export function addControl(data) {
  return {
    type: 'ADD_CONTROL',
    payload: data,
  };
}

export function updateFormConfig(data) {
  return {
    type: 'UPDATE_FORM_CONFIG',
    payload: data,
  };
}

export function addOption(data) {
  return {
    type: 'ADD_OPTION',
    payload: data,
  }
}

export function updateOption(data) {
  return {
    type: 'UPDATE_OPTION',
    payload: data,
  }
}

export function deleteOption(data) {
  return {
    type: 'DELETE_OPTION',
    payload: data,
  };
}

export function updateStyle(data) {
  return {
    type: 'UPDATE_STYLE',
    payload: data,
  };
}

export function updateComponentTitle(data) {
  return {
    type: 'UPDATE_COMPONENT_TITLE',
    payload: data,
  };
}
