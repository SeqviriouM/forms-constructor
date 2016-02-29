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
