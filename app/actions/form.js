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
